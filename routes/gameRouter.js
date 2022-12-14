const express = require("express");
const game = require("../controller/GameController");
const router = express.Router();


router.get("/", game.openGame);

router.get("/star", game.openStar);
router.post("/scoresave", game.scoreSave);

router.get("/ranking", game.ranking);

router.get("/guide", game.guide);

module.exports = router;