const express = require("express");
const game = require("../controller/GameController");
const router = express.Router();


router.get("/", game.openGame);
router.post("/scoresave", game.scoreSave);

router.get("/ranking", game.ranking);

module.exports = router;