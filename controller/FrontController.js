//메인 페이지를 세션이 있는경우와 없는경우 상황을 나눠준거임. 보내주는게 다름.
exports.index = (req,res) => {
    const user = req.session.user;
//정보가 없으면 undefinde로 뜨니까 user!= undefined는 정보가 있을때,
    if (user != undefined) {
        res.render("index", {isLogin: true, user: user});
        //user앞은 key값이고 뒤의 user는 const한 user.
    } else {
        res.render("index", {isLogin: false})
    }
}
