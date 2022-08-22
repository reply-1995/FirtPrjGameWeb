const models = require("../model"); // -> 시퀄라이즈에 사용


exports.Free_page = (req, res) => {
    const user = req.session.user;
    if (user != undefined) {
        res.render("community_freeList", {isLogin: true, user: user});
    } else {
        res.render("community_freeList", {isLogin: false});
    }

    
    // user/login에 접속하면 login.ejs 파일불러오기.
}
exports.Free_write = (req, res) => {
    const user = req.session.user;
    console.log(user);
    console.log(req.body);
    // 로그인 했을 때
    if (user != undefined) {
        res.render("community_freeList", {isLogin: true, user: user});
    } else {
        res.render("community_freeList", {isLogin: false});
    }
    //res.render("community_freeList");
}
exports.Free_writeview = (req, res) => {
    res.render("community_freewrite");
}