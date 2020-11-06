"use strict";

import express from "express";
const app = express();
import dotenv from 'dotenv'
import { sendReqParam, respondWithName } from "./controllers/homeController.js";
import  { respondInternalError, respondNoResourceFound, logErrors } from "./controllers/errorController.js"
// import connectDB from './config/db.js'
import layouts from "express-ejs-layouts";
app.set("port", process.env.PORT || 3000);

// view 
app.set("view engine", "ejs");
app.use(layouts);
// view 


// dotenv.config()


// connectDB()


app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});



app.get("/name/:myName", respondWithName);
// app.get("/items/:vegetable", sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});


app.use(logErrors);
app.use(respondNoResourceFound);
app.use(respondInternalError);
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
