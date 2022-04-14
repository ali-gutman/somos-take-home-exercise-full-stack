const Recomendation = require("./recomendations.model");

const createRecomendation = async (req, res) => {
  try {
    const recomendation = new Recomendation(req.body);
    const recomendationCreated = await recomendation.save();
    res.status(200).json(recomendationCreated);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const getRecomendations = async (req, res) => {
  try {
    const recomendations = await Recomendation.find();
    res.json(recomendations);
  } catch (error) {
    res.json(error);
  }
};
const getRecomendation = async (req, res) => {
  try {
    const recomendationFound = await Recomendation.findById(req.params.id);
    if (!recomendationFound) return res.status(204).json();
    res.json(recomendationFound);
  } catch (error) {
    res.json(error);
  }
};
const updateRecomendation = async (req, res) => {
  try {
    const recomendationUpdated = await Recomendation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!recomendationUpdated) return res.status(204).json();
    res.json(recomendationUpdated);
  } catch (error) {
    res.json(error);
  }
};
const deleteRecomendation = async (req, res) => {
  try {
    const recomendationDeleted = await Recomendation.findByIdAndDelete(
      req.params.id
    );
    if (!recomendationDeleted) return res.status(204).json();
    res.json(recomendationDeleted);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createRecomendation,
  deleteRecomendation,
  getRecomendation,
  updateRecomendation,
  getRecomendations,
};
