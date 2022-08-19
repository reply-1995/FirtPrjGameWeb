const express = require("express");
const game = require("../controller/GameController");
const router = express.Router();


router.get("/", game.openGame);

module.exports = router;