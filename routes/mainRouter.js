const express = require("express");
const front = require("../controller/FrontController");
const user = require("../controller/UserController");
const router = express.Router();



router.get("/", front.index);

router.get("/logout", (req,res) => {
    const user = req.session.user;

    req.session.destroy(function(err){
        res.send(
            //메인페이지로 이동
            `<script>
                location.href='/';
                alert('로그아웃 성공');
            </script>`
        );
    });
})

router.get("/faq", user.faq);

router.get("/request", user.request);

module.exports = router;