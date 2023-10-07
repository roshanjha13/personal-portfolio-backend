const express = require("express");
const { getPortFolio } = require("../controllers/portfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

module.exports = router;
