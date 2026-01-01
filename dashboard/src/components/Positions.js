import React from "react";
import { positions } from "../data/data";

const Positions = () => {
    return (
        <>
            <h3 className="title">Positions ({positions.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Chg.</th>
                    </tr>

                    {/* dynammic portion from positions data */}
                    {positions.map((stock, index) => {
                        //calculations related to Profit and Loss
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - (stock.avgCost * stock.qty) >= 0;

                        //to store for designing purpose
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index} className="">
                                <td>{stock.product}</td>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td> {/* toFixded(2) for 2 decimal numbers after points*/}
                                <td>{stock.price.toFixed(2)}</td>
                                <td className={profClass}>{(curValue - (stock.avg * stock.qty)).toFixed(2)}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    );
};

export default Positions;