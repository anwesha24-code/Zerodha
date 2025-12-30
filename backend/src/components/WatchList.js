import { useState } from "react";
import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";

import { BarChart, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";//for icons

const WatchList = () => {
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
    </div>
  );
};
export default WatchList;

//we can make the watchlist item outside in another file also but since this is very tightly coupoled and has no use outside of this file we write 
//watchlist item component here itself

const WatchListItem = ({ stock }) => {
  const [ShowWatchlistAcitons, setShowWatchlistAcitons] = useState(false);//to keep track of hover so that buy sell button appears
  const handleMouseEnter = (e) => {
    setShowWatchlistAcitons(true);
  }
  const handleMouseExit = (e) => {
    setShowWatchlistAcitons(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="item-Info">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down" />//imported icons
        ) : (
          <KeyboardArrowUp className="up" />
        )}
        <span className="price">{stock.price}</span>
      </div>
      {ShowWatchlistAcitons && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

//visible only on hover
const WatchlistActions = (uid) => {//stock name is used as uid
  return (
    <span className="actions">
      {/*we use (B) as a shortcut for buy and (S) for sell*. Grow gives transition*/}
      <Tooltip title="Buy (B)" TransitionComponent={Grow} placement="top" arrow  >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" TransitionComponent={Grow} placement="top" arrow  >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" TransitionComponent={Grow} placement="top" arrow  >
        <button className="action"><BarChart className="icon" /></button>
        {/*barchart is an icon imported from mui icons*/}
      </Tooltip>
      <Tooltip title="More (M)" TransitionComponent={Grow} placement="top" arrow  >
        <button className="action"><MoreHoriz className="icon" /></button>
        {/*morehoriz is an icon imported from mui icons*/}
      </Tooltip>
    </span>
    );
  } 