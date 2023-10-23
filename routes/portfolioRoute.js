const express = require("express");
const { getPortFolio, updateIntro } = require("../controllers/getAllPortfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

router.route('/update-intro').put(updateIntro)

module.exports = router;
