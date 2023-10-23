const {
  Intro,
  About,
  Contact,
  Projects,
  Experience,
  Education,
} = require("../models/portfolioModel");

//get all portfolio data
exports.getPortFolio = async (req, res) => {
  try {
    const intros = await Intro.find().lean();
    const abouts = await About.find().lean();
    const contacts = await Contact.find().lean();
    const projects = await Projects.find().lean();
    const experiences = await Experience.find().lean();
    const educations = await Education.find().lean();

    res.status(200).json({
      intro: intros[0],
      about: abouts[0],
      contact: contacts[0],
      project: projects,
      experience: experiences,
      education: educations,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//update intro
 exports.updateIntro = async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
//update intro
 exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};