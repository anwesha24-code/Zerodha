import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";

import { BarChart, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";//for icons
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  //creating data for doughnut chart following the removed fake data from doughnut.js
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  }
  // export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  // {
  //   label: '# of Votes',
  //   data: [12, 19, 3, 5, 2, 3],
  //   backgroundColor: [
  //     'rgba(255, 99, 132, 0.2)',
  //     'rgba(54, 162, 235, 0.2)',
  //     'rgba(255, 206, 86, 0.2)',
  //     'rgba(75, 192, 192, 0.2)',
  //     'rgba(153, 102, 255, 0.2)',
  //     'rgba(255, 159, 64, 0.2)',
  //   ],
  //   borderColor: [
  //     'rgba(255, 99, 132, 1)',
  //     'rgba(54, 162, 235, 1)',
  //     'rgba(255, 206, 86, 1)',
  //     'rgba(75, 192, 192, 1)',
  //     'rgba(153, 102, 255, 1)',
  //     'rgba(255, 159, 64, 1)',
  //   ],
  //   borderWidth: 1,
  // },
  //   ],
// };
return (
  <div className="watchlist-container">
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        className="search"
      />
      <span className="counts"> {watchlist.length} / 50</span>
    </div>

    <ul className="list">
      {watchlist.map((stock, index) => {
        return <WatchListItem stock={stock} key={index} />;
      })}
    </ul>
    {/* for doughnut graph */}
    <DoughnutChart data={data} />
  </div>
);
};
export default WatchList;

//we can make the watchlist item outside in another file also but since this is very tightly
// coupled and has no use outside of this file we write 
//watchlist item component here itself

//this is the part that will always be visible

const WatchListItem = ({ stock }) => {
  //to keep track of hover so that buy sell button appears
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {//when hover
    setShowWatchlistActions(true);
  }
  const handleMouseExit = (e) => {//when hover out
    setShowWatchlistActions(false);
  }
  return (
    //when mouse enters we call handleMouseEnter so that showWatchlistActions becomes true and buy sell buttons appear
    //when mouse exits we call handleMouseExit so that showWatchlistActions becomes false and buy sell buttons disappear

    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        {/*if down then the stock name will be red else green className down will make it red and up will make it green*/}
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>

      </div>

      {/*will be visible on top of li content when hovered*/}
      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

//visible only on hover

const WatchlistActions = ({ uid }) => {//stock name is used as uid, {} is for destructuring
  //for each stock we have buy sell analytics more buttons

  //import openBuyWindow function from GeneralContext
  const { openBuyWindow } = useContext(GeneralContext);
  return (
    <span className="actions">
      <span>
        {/*we use (B) as a shortcut for buy and (S) for sell*. Grow gives transition*/}
        <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}  >
          {/* when button is clicked window is opened and the uid is passed to recognise which stock buy is pressed */}
          <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}  >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow slots={{ transition: Grow }}  >
          <button className="action"><BarChart className="icon" /></button>
          {/*barchart is an icon imported from mui icons*/}
        </Tooltip>
        <Tooltip title="More (M)" placement="top" arrow slots={{ transition: Grow }}  >
          <button className="action"><MoreHoriz className="icon" /></button>
          {/*morehoriz is an icon imported from mui icons*/}
        </Tooltip>
      </span>
    </span>
  );
} 