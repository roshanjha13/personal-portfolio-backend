const express = require("express");
const { getPortFolio, updateIntro, updateAbout, addExperience } = require("../controllers/getAllPortfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

router.route('/update-intro').put(updateIntro)
router.route('/update-about').put(updateAbout)

router.route('/add-experience').post(addExperience)

module.exports = router;
