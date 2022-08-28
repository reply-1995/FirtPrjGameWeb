const express = require("express");
const community = require("../controller/CommunityController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/img/server_img_upload/');
        },
        filename(req, file, done){
            console.log(req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.idx + "_" +req.body.id + "_" + req.body.category + ext);
            filename = req.body.idx + "_" +req.body.id + "_" + req.body.category + ext;
        },
    }),
    limits: { fileSize: 5*1024*1024}, //5mb
});

router.get("/free", community.Free_page); //자유게시판 눌렀을때
router.get("/free/write", community.Free_writeview); //게시판에서 글쓰기 -> 글쓰기 페이지로 이동할 때
router.post("/free", community.Free_write)// 글쓰기 페이지에서 글작성 눌렀을 때
router.post("/free/modify", community.Free_modify);

router.get("/read", community.community_read);
router.get("/delete", community.community_delete);


router.post("/createcomment", community.createComment);
router.delete("/deletecomment", community.deleteComment);

router.get("/screen", community.Screen_page);
router.get("/screen/write", community.Screen_writeview);
router.post("/screen/saveImg/id", community.Screen_saveReqID);
router.post("/screen/saveImg/file", upload.single('fileimg'),community.Screen_saveReqFile);
router.post("/screenshot", community.Screen_write)// 글쓰기 페이지에서 글작성 눌렀을 때
router.post("/screenshot/modify", community.Screen_modify);


router.get("/notice", community.Notice_page);
router.get("/notice/write", community.Notice_writeview);
router.post("/notice", community.Notice_write);
router.post("/notice/modify", community.Notice_modify);



module.exports = router;