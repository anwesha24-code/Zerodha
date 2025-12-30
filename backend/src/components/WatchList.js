import React, { useState } from "react";

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
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);//to keep track of hover so that buy sell button appears
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }
  const handleMouseExit = (e) => {
    setShowWatchlistActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
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
      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

//visible only on hover
const WatchlistActions = ({uid}) => {//stock name is used as uid {} is destructure
  return (
    <span className="actions">
      <span>
        {/*we use (B) as a shortcut for buy and (S) for sell*. Grow gives transition*/}
        <Tooltip title="Buy (B)"  placement="top" arrow slots={{ transition: Grow }}  >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)"  placement="top" arrow slots={{ transition: Grow }}  >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)"  placement="top" arrow slots={{ transition: Grow }}  >
          <button className="action"><BarChart className="icon" /></button>
          {/*barchart is an icon imported from mui icons*/}
        </Tooltip>
        <Tooltip title="More (M)"  placement="top" arrow slots={{ transition: Grow }}  >
          <button className="action"><MoreHoriz className="icon" /></button>
          {/*morehoriz is an icon imported from mui icons*/}
        </Tooltip>
      </span>
    </span>
  );
} 