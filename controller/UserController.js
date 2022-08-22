// 
const models = require("../model"); // -> 시퀄라이즈에 사용
// const User = require("../model/User");

exports.register_page = (req,res) => {
    // index.ejs 파일 불러오기
    res.render("register");
}

exports.login_page = (req, res) => {
    res.render("login");
    // user/login에 접속하면 login.ejs 파일불러오기.
}

exports.register = (req,res) => {
    //{ id: , name:, pw:, age: }
    console.log( req.body );

    let object = {
        id: req.body.id,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        profile: req.body.profile
    }
    models.User.create(object)
    .then((result) => {
        console.log(result);
        res.send(result);
    })

    // models.User.


    // User.register(req.body, function(result) {
    //     console.log(result);
    //     res.send(req.body);
    // });
}

exports.login = (req,res) => {
    //{id: , pw: }

    models.User.findOne({where: {id: req.body.id, password: req.body.password}})
    .then((result) => {
        console.log(result);
        if (result == null) {
            res.send(false);
        } else {
            req.session.user = req.body.id;
            //성공하면 session에 아이디 달겠다. 
            res.send(true);
        }
    })
    // User.login(req.body, function(result){
    //     console.log(result);
    //     //result =rows
    //     if(result.length == 0){
    //         //length, result의 길이가 0이니까 값이 없음. 틀렸다면!
    //         res.send(false);
    //     } else{
    //         res.send(true);
    //     }
    // });
}

exports.profile = (req, res) => {
    const user = req.session.user;

    models.User.findOne({where: {id: user}})
    .then((result) => {
        res.render("profile", {data: result})
    })
}

// exports.profile = (req, res) => {
    //일반 폼 전송으로 <input name="id">만 존재한다.
    //{id: }
    // console.log(req.body);
    // models.User.findOne({where: {id: req.body.id}})
    // .then((result) => {
        // res.render("profile", {data: result});
        //res.send안써도되는게 동적폼전송 안했으니까, res.render프로필 띄워준다.
    // })
    // User.get_user(req.body, function(result){
    //     //result = rows = [RowDataTable {id: ...}, {}]
    //     //result[0] ={id:, name:, pw:, age}
    //     console.log(result[0]);
    //     res.render("profile", {data: result[0]});
    //     //render는 profile을 불러와서 보여준다. data. <-으로 간다. 
    // });
// }

exports.edit = (req, res) => {
    // {id: , name: , pw: , email: }
    console.log(req.body);
    let obj = {
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    }
    models.User.update(obj, {where: {id: req.body.id}})
    .then((result) => {
        res.send("회원정보가 수정 되었습니다.");
    })
    // User.update(req.body, function(result) {
    //     console.log(result);
    //     res.send("회원정보가 수정 되었습니다.");
    // });
}

exports.delete = (req, res) => {
    models.User.destroy({where: {id: req.body.id}})
    .then((result) => {
        req.session.destroy(function(err){});
        res.send("탈퇴하였습니다.");
    })
    // User.delete(req.body, function(result) {
    //     console.log(result);
    //     res.send("회원 탈퇴되었습니다.");
    // });
}

//중복확인
exports.overlap = (req,res) => {
    //{id: , pw: }
    models.User.findOne({where: {id: req.body.id}})
    .then((result) => {
        if (result == null) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
}

// 아이디 찾기 page
exports.find_id_page = (req, res) => {
    res.render("find_id");
}

// 아이디 정보가 있는지 확인
exports.find_id = (req, res) => {
    models.User.findOne({
        where: {name: req.body.name, email: req.body.email}
    }).then((result) => {
        if (result == null) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
}

// 아이디 찾기
exports.find_id_result = (req, res) => {
    models.User.findOne({
        where: {name: req.body.name, email: req.body.email}
    }).then((result) => {
        res.render("find_id_result", {id: result.id});
    })
}


// 비밀번호 찾기 page
exports.find_pw_page = (req, res) => {
    res.render("find_pw");
}

// 비밀번호 정보가 있는지 확인
exports.find_pw = (req, res) => {
    models.User.findOne({
        where: {id: req.body.id, email: req.body.email}
    }).then((result) => {
        if (result == null) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
}

// 비밀번호 찾기- 정보가 무조건있음 위에서 찾았으니까 , 여기선 비밀번호를 가져온다. 찾은 비밀번호를 find_pw_result.ejs로 보내준다.
exports.find_pw_result = (req, res) => {
    models.User.findOne({
        where: {id: req.body.id, email: req.body.email}
    }).then((result) => {
        res.render("find_pw_result", {password: result.password});
    })
}

exports.customer = (req, res) => {
    res.render("customer");
}

exports.request = (req, res) => {
    res.render("request");
}