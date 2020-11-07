"use strict";

import httpStatus from "http-status-codes";

export const  pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

/**
 * error handeler must take 4 arguments
 * @param {*} error : repersenting the error object
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const internalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};


