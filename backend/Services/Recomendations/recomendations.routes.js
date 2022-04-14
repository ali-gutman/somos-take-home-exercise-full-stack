const Router = require("express");
const router = Router();

const recomendationsCtrl = require("./recomendations.controller");

router.post("/recomendation", recomendationsCtrl.createRecomendation);

router.get("/recomendations", recomendationsCtrl.getRecomendations);

router.get("/recomendation/:id", recomendationsCtrl.getRecomendation);

router.put("/recomendation/:id", recomendationsCtrl.updateRecomendation);

router.delete("/recomendation/:id", recomendationsCtrl.deleteRecomendation);

module.exports = router;
