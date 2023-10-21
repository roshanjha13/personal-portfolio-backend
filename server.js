const express = require("express");
const dotenv = require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

const router = require('./routes/portfolioRoute')

app.use("/api", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
