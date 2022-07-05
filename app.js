require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const app = express();

app.use(express.json());

app.use("/", require("./Routes/public"));
app.use("/", require("./Routes/protected"));

module.exports = app;