const express = require("express");
const community = require("../controller/CommunityController");
const router = express.Router();


router.get("/free", community.Free_page); //자유게시판 눌렀을때
router.get("/free/write", community.Free_writeview); //게시판에서 글쓰기 -> 글쓰기 페이지로 이동할 때
router.post("/free", community.Free_write)// 글쓰기 페이지에서 글작성 눌렀을 때

module.exports = router;