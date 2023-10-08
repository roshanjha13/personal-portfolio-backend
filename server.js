const express = require("express");
const dotenv = require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/portfolioRoute')

app.use("/api", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
