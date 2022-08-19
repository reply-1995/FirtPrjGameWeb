const models = require("../model"); // -> 시퀄라이즈에 사용

exports.openGame = (req, res) => {

    const user = req.session.user;

    models.User.findOne({where: {id: user}})
    .then((result) => {
        res.render("game", {data: result})
    })
}