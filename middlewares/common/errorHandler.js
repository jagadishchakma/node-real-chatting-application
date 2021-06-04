/**
 * Title: error handling method
 * Description: application all error handlings method here
 * Author: Jagadish Chakma
 * Date: 6-04-2021
 * Version: 1.0.0
 * License: Learn with sumit
 */

// dependencies
const createError = require("http-errors");

// not found error handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested !"));
}

// defualt error handler
function defaultErrorHandler(err, req, res, next) {
  res.locals.error = { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error Page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

// module exports
module.exports = {
  notFoundHandler,
  defaultErrorHandler,
};
