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
