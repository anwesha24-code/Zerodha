//useState, useEffect, axios are imported for displaying db data in frontend 
import { useState } from "react";
import React from "react";
// import { positions } from "../data/data";
import { useEffect } from "react";
import axios from "axios";

const Positions = () => {
    //fetching data from mongo to be displayed in dashboard (connecting db and frontend)
    const [allPositions, setAllPositions] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3002/allPositions").then((res) => {
            console.log(res.data);//just to see if data is coming correctly
            setAllPositions(res.data);
        });
    }, []);
    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* dynammic portion from allPositions data */}
                        {allPositions.map((stock, index) => {
                            //calculations related to Profit and Loss
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - (stock.avg * stock.qty) >= 0;

                            //to store for designing purpose
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";

                            return (
                                <tr key={index} className="">
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{typeof stock.avg === "number" ? stock.avg.toFixed(2) : "--"}</td>
                                    <td>{typeof stock.price === "number" ? stock.price.toFixed(2) : "--"}</td>

                                    <td className={profClass}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>

                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Positions;