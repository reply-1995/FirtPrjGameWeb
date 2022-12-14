const models = require("../model"); // -> 시퀄라이즈에 사용
const { Op } = require('sequelize');

exports.openGame = (req, res) => {

    const user = req.session.user;

    models.User.findOne({where: {id: user}})
    .then((result) => {
        res.render("game", {data: result})
    })
}

exports.openStar = (req, res) => {

    const user = req.session.user;

    models.User.findOne({where: {id: user}})
    .then((result) => {
        res.render("gameStar", {data: result})
    })
}

exports.scoreSave = (req, res) => {
    const user = req.session.user;

    models.User.findOne({where: {id: user}})
    .then((result) => {
        if( result.score < req.body.score ) {
            models.User.update ({score: req.body.score}, {where:{id: user}})
            res.send("기록 갱신!");
        } else { 
            res.send("기록 갱신 실패");
        }
        // 새로 넘어온 점수와 db에 저장된 점수를 비교해서 더 큰 점수를 업데이트
        //req.body.score/ result.score

    })

}

exports.ranking = (req, res) => {
    const user = req.session.user;
    models.User.findAll({
        order: [['score', 'DESC']],
        where: {
            score: { [Op.gt]: 0},
          },
    }) 
    .then((data) => {
        console.log(data);
        if (user != undefined) {
            models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("ranking", {isLogin: true, user: user, userdata: result, data: data});
            })
        } else {
            res.render("ranking", {isLogin: false, data: data});
        }
        
    });

    
}

exports.guide = (req, res) => {
    const user = req.session.user;


    if (user != undefined) {

        models.User.findOne({where: {id: user}})
        .then((result) => {
            res.render("game_guide", {isLogin: true, user: user, userdata: result});
        })

    } else {
        res.render("game_guide", {isLogin: false})
    }
}