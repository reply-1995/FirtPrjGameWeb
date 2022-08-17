const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.index);
router.post("/register", user.register);

router.get("/login", user.login_page);
router.post("/login", user.login);
router.post("/profile", user.profile);


router.patch("/edit", user.edit);

router.delete("/delete", user.delete);

module.exports = router;