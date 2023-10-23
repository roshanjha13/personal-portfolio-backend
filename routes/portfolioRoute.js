const express = require("express");
const { getPortFolio, updateIntro, updateAbout } = require("../controllers/getAllPortfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

router.route('/update-intro').put(updateIntro)
router.route('/update-about').put(updateAbout)

module.exports = router;
