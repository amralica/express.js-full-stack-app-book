"use strict";

import httpStatus from "http-status-codes";

/**
 * error handeler must take 4 arguments
 * @param {*} error : repersenting the error object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
  };
  

  // handling NOT_FOUND 404 error
  const respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
  };
  

  // handling 500 internal error
  const respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
  };
  

  export { respondInternalError, respondNoResourceFound, logErrors }
