const express = require("express");
const config = require("./config");
const cors = require("cors");
const recomendationRoutes = require("./Services/Recomendations/recomendations.routes");

// init
const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutes
app.use(recomendationRoutes);

module.exports = app;
