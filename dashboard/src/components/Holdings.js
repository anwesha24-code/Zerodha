import React,{useState,useEffect} from "react";
// import { holdings } from "../data/data";

import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  //fetching data from mongo to be displayed in dashboard (connecting db and frontend)
  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      console.log(res.data);//just to see if data is coming correctly
      setAllHoldings(res.data);
    });
  },[]);

//GRAPH RELATED
  //creates array of names by extracting from holdings
  const labels=allHoldings.map((subArray)=>subArray["name"]);//creates array of names by extracting from holdings
  //modifying template that was already present and deleted from VerticalGraph.js
  const data={
    labels,
    datasets:[
      {
        label:"Stock Price",
        //for each stock we are getting the price
        data: allHoldings.map((stock)=>stock.price),
        backgroundColor:"rgb(255,99,132,0.5",
      },
    ],
  };
  
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {/* dynammic portion from allHoldings data */}
          {allHoldings.map((stock, index) => {
            //calculations related to Profit and Loss
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - (stock.avgCost * stock.qty) >= 0;

            //to store for designing purpose
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className="">
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td> {/* toFixded(2) for 2 decimal numbers after points*/}
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{(curValue - (stock.avg * stock.qty)).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      {/* for importing the graph that has been copy pasted on VerticalGrpah.js from react-chart js */}
      <VerticalGraph data={data}/> 
    </>
  );
};

export default Holdings;