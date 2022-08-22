const models = require("../model"); // -> 시퀄라이즈에 사용


exports.Free_page = (req, res) => {
    const user = req.session.user;
    if (user != undefined) {
        res.render("community_freeList", {isLogin: true, user: user});
    } else {
        res.render("community_freeList", {isLogin: false});
    }

    
}
exports.Free_write = (req, res) => {
    const user = req.session.user;
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    let object = {
        id: user,
        title: req.body.title,
        content: req.body.content,
        create_date: dateString
    }
    models.Community.create( object )
    .then((result) => {
        console.log(result);
        if (user != undefined) {
            res.render("community_freeList", {isLogin: true, user: user});
        } else {
            res.render("community_freeList", {isLogin: false});
        }
    });


    
}
exports.Free_writeview = (req, res) => {
    const user = req.session.user;
    if (user != undefined) {
        res.render("community_freeWrite");
    } else {
        alert("로그인을 해주세요");
    }
}