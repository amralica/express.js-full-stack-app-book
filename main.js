"use strict";

import express from "express";
const app = express();
import mongoose from "mongoose"
import {db} from './config/keys.js'
import { showCourses, showSignUp,  postedSignUpForm, index} from "./controllers/homeController.js"
import  { pageNotFoundError, internalServerError } from "./controllers/errorController.js"
import  { getAllSubscribers } from "./controllers/subscribersController.js"
import Subscriber from "./models/subscriber.js"
import layouts from "express-ejs-layouts";
app.set("port", process.env.PORT || 3000);
// DB //-----------
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db)
  .then(() => console.log('Successfully connected to MongoDB using Mongoose!'))
  .catch((err) => console.log(err));


  // Subscriber.create(
  //   {
  //     name: "Amr Ali",
  //     email: "amr@amr.com"
  //   },
  //   function (error, savedDocument) {
  //     if (error) console.log(error);
  //     console.log(savedDocument);
  //   }
  // );



// DB ENDS //
//-----------
// view 
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));



app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get("/subscribers", getAllSubscribers, (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});

app.get("/", index);
app.get("/courses", showCourses);
app.get("/contact", showSignUp);
app.post("/contact", postedSignUpForm);


app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});


app.use(pageNotFoundError);
app.use(internalServerError);
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
