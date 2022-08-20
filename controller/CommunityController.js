const models = require("../model"); // -> 시퀄라이즈에 사용


exports.Free_page = (req, res) => {
    res.render("community_freeList");
    // user/login에 접속하면 login.ejs 파일불러오기.
}
exports.Free_write = (req, res) => {
    res.render("community_freeList");
}
exports.Free_writeview = (req, res) => {
    res.render("community_freewrite");
}