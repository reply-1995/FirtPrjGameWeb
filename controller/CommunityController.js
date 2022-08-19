const models = require("../model"); // -> 시퀄라이즈에 사용


exports.Free_page = (req, res) => {
    res.render("community_free");
    // user/login에 접속하면 login.ejs 파일불러오기.
}