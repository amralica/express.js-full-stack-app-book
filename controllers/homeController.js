"use strict";

const sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

const respondWithName = (req, res) => {
  let veg = req.params.vegetable;
  res.render("index");
};

export { sendReqParam, respondWithName }

