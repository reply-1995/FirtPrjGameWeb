const models = require("../model"); // -> 시퀄라이즈에 사용


exports.Free_page = (req, res) => {
    const user = req.session.user;
    
    models.Community.findAll() // sequelize 문법. Select * FROM visitor;
    .then((result) => {
        //console.log(result);
        if (user != undefined) {
            res.render("community_freeList", {isLogin: true, user: user, data: result});
        } else {
            res.render("community_freeList", {isLogin: false, data: result});
        }
        
    });
    
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
        res.redirect('/community/free');
    });
    


    
}
exports.Free_writeview = (req, res) => {
    const user = req.session.user;
    if (user != undefined) {
        res.render("community_freeWrite");
    } else {
        res.redirect('/user/login');
    }
}


exports.Free_read = (req, res) => {
    const user = req.session.user;

    
    models.Community.findOne({
            where: { idx: req.query.idx,}
        }).then((result) => {
            let newObj = {
                clicked : result.clicked+1,
            }    
            models.Community.update(newObj, { where: { idx: req.query.idx } })
            .then((result) => {
                console.log(result.clicked);
            })
    })



    models.Community.findOne({
        where: { idx: req.query.idx,}
    }).then((result) => {
        console.log( result);
        res.render("community_view",{ result : result, sessionID: user});
    })

}

exports.Free_delete = (req, res) => {
    models.Community.destroy({
        where: { idx: req.query.idx*1 }
    }).then((result) => {
        console.log( result );
        res.redirect('/community/free');
    })
}
exports.smarteditor = (req,res) => {
    res.render("smarteditorTEST");
}