//importing models so that data inside mongo can be fetched
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

//while fetching data from mongo the axios being used needs to parse 
// the url for that we need body-parser and for security we use cors
const bodyParser = require('body-parser');
const cors = require('cors');

//connecting mongoose website
require('dotenv').config();

//template
const express = require("express");
const app = express();

//establishing connection
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;
//process.env.PORT is the port assigned by AWS
const PORT = process.env.PORT || 3002;

//2 lines needed for parsing (db to backend)
app.use(cors());
app.use(bodyParser.json());

//api endpoints to connect with dashbord
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})
//api endpoints to connect with dashbord
app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})




mongoose.connect(url).then(() => {
    console.log("db connect")
});//connecting the mongoose


//-----------------run only once to initialise data--------------

// //to add dummy data initialisation
// const { HoldingsModel } = require("./model/HoldingsModel")
// //open the url localhost:3002/addHoldings Done will appear if data gets initialised and 
// then check in mongoose website acc data will be visible and 

// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 5,
//             avg: 1450.00,
//             price: 1500.30,
//             net: "+3.45%",
//             day: "1.20%",
//         },
//         {
//             name: "INFY",
//             qty: 10,
//             avg: 1500.00,
//             price: 1555.45,
//             net: "+3.70%",
//             day: "-1.60%",
//         },
//         {
//             name: "TCS",
//             qty: 3,
//             avg: 3150.00,
//             price: 3200.50,
//             net: "+1.59%",
//             day: "0.85%",
//         }
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("Done");//so that after running we get confirmation in console 
//     // that data has been initialised since this will be done only once
// })

//-----------------run only once to initialise data--------------

// // to add dummy data initialisation
// // const { PositionsModel } = require("./model/PositionsModel.js")
// // open the url localhost:3002/addPositions Done will appear if data gets initialised and 
// // then check in mongoose website acc data will be visible and 

// app.get('/addPositions', async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 320.00,
//             net: "+1.18%",
//             day: "0.50%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "HDFCBANK",
//             qty: 5,
//             avg: 1450.00,
//             price: 1500.30,
//             net: "+3.45%",
//             day: "1.20%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 10,
//             avg: 1500.00,
//             price: 1555.45,
//             net: "+3.70%",
//             day: "-1.60%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "TCS",
//             qty: 3,
//             avg: 3150.00,
//             price: 3200.50,
//             net: "+1.59%",
//             day: "0.85%",
//             isLoss: false,
//         }
//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Done");//so that after running we get confirmation in console 
//     // that data has been initialised since this will be done only once
// })
// //this entire thing done above was to initialise data for Positions
app.listen(PORT, () => {
    console.log("app started");
    // console.log('db connected');

});
//---------------------------------------------------------------