const {
  Intro,
  About,
  Contact,
  Projects,
  Experience,
  Education,
} = require("../models/portfolioModel");

exports.getPortFolio = async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const contacts = await Contact.find();
    const projects = await Projects.find();
    const experiences = await Experience.find();
    const educations = await Education.find();

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
