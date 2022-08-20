const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.register_page);
router.post("/register", user.register);

router.get("/login", user.login_page);
router.post("/login", user.login);

router.get("/profile", user.profile);
// router.post("/profile", user.profile);


router.patch("/edit", user.edit);

router.delete("/delete", user.delete);
router.post("/overlap", user.overlap);


//get: 여기서 find_id_page res.render로 페이지만 띄운다.
router.get("/find_id", user.find_id_page);
router.post("/find_id", user.find_id);
//여기서 post는 정보를 받아오는것임.

router.post("/find_id_result", user.find_id_result);

router.get("/find_pw", user.find_pw_page);
router.post("/find_pw", user.find_pw);

router.post("/find_pw_result", user.find_pw_result);


module.exports = router;