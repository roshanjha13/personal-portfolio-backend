const express = require("express");
const {
  getPortFolio,
  updateIntro,
  updateAbout,
  addExperience,
  updateExperience,
  deleteExperience,
  updateContact,
  addProject,
  updateProject,
  deleteProject,
  updateEducation,
  addEducation,
  deleteEducation,
} = require("../controllers/getAllPortfolioController");

const router = express.Router();

router.route("/get-portfolio-data").get(getPortFolio);

router.route("/update-intro").put(updateIntro);

router.route("/update-about").put(updateAbout);

router.route("/update-contact").put(updateContact);

router.route("/update-experience").put(updateExperience);
router.route("/add-experience").post(addExperience);
router.route("/delete-experience").post(deleteExperience);

router.route("/update-project").put(updateProject);
router.route("/add-project").post(addProject);
router.route("/delete-project").post(deleteProject);

router.route("/update-education").put(updateEducation);
router.route("/add-education").post(addEducation);
router.route("/delete-education").post(deleteEducation);

module.exports = router;
