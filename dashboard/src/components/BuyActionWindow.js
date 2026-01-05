import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

//uid is the stock name that is used as a prop
const BuyActionWindow = ({ uid }) => {
    // extract functions from the context
    const { closeBuyWindow } = useContext(GeneralContext);

    //the variables that user enters need to be stored
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    //function triggered when user clicks on buy button
    const handleBuyClick = () => {
        //sending the data gathered through frontend to the backend
        axios.post("http://localhost:3002/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        });
        // closing buy window after placing order
        closeBuyWindow();
    };
    // function triggered after user clicks cancel button
    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        //the part that is visible on clicking 
        <div className="container" id="buy-window" draggable="true">
            {/* Regular order input section */}
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                         {/* Quantity input field */}
                         <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)} // Update quantity state
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        {/* Price input field */}
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)} // Update price state

                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>
            {/* Action buttons section */}
            <div className="buttons">
                {/* Display margin information */}
                <span>Margin required ₹140.65</span>
                <div>
                    {/* Buy button */}
                    <button className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </button>
                    {/* Cancel button */}
                    <button to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;