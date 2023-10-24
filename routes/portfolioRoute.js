const express = require("express");
const { getPortFolio, updateIntro, updateAbout, addExperience, updateExperience, deleteExperience } = require("../controllers/getAllPortfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

router.route('/update-intro').put(updateIntro)

router.route('/update-about').put(updateAbout)

router.route('/add-experience').post(addExperience)
router.route('/update-experience').put(updateExperience)
router.route('/delete-experience').delete(deleteExperience)

module.exports = router;
