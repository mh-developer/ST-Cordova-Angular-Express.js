const express = require("express");
const logger = require("morgan");
var cors = require("cors");

const usersRouter = require("./users/users.route");
const locationsRouter = require("./locations/locations.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

module.exports = app;
