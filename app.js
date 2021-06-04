/**
 * Title: NodeJS Real Time Chatting Application
 * Description: Using nodejs make real time chat application
 * Author: Jagadish Chakma
 * Date: 4-6-2021
 * Version: 1.0.0
 * License: Learn With Sumit
 */

// dependencies
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  defaultErrorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./routers/loginRouter");
const usersRouter = require("./routers/usersRouter");
const inboxRouter = require("./routers/inboxRouter");

// configuration
const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch(() => console.log("database connection failed"));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static("public"));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing set up
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// error handler
app.use(notFoundHandler);
app.use(defaultErrorHandler);

// server listening
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
