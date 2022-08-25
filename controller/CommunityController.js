const models = require("../model"); // -> 시퀄라이즈에 사용

const moment = require("moment"); //datetime format 해주는 module

exports.Free_page = (req, res) => {
    const user = req.session.user;
    models.Community.findAll({
        where: {isdeleted: 'N',}
    }) 
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
        res.render("community_freeWrite", {isLogin: true, user: user});
    } else {
        res.redirect('/user/login');
    }
}


exports.Free_read = (req, res) => {
    const user = req.session.user;

    // 조회할때마다 조회수 증가
    models.Community.findOne({
            where: { idx: req.query.idx, isdeleted: 'N',}
        }).then((result) => {
            let newObj = {
                clicked : result.clicked+1,
            }    
            models.Community.update(newObj, { where: { idx: req.query.idx, isdeleted: 'N',} })
            .then((result) => {
                console.log(result);
            })
    })

    models.Community.findOne({
        where: { idx: req.query.idx, isdeleted: 'N',}
    }).then((result) => {
        console.log( result);

        models.Comment.findAll({
            where: {isdeleted: 'N', parentidx: result.idx, category: 'free',}
        }) 
        .then((com) => {

            if (user != undefined) {
                res.render("community_view", {isLogin: true, result : result, user: user, com: com, moment: moment, });
            } else {
                res.render("community_view", {isLogin: false, result : result, user: user, com: com, moment: moment, });
            }
        });
    })

}

exports.Free_delete = (req, res) => {

    models.Community.findOne({
        where: { idx: req.query.idx, isdeleted: 'N',}
    }).then((result) => {
        let newObj = {
            isdeleted : 'Y',
        }    
        models.Community.update(newObj, { where: { idx: req.query.idx } })
        .then((result) => {
            console.log(result);
            res.redirect('/community/free')
        })
    })

}

exports.Free_modify = (req, res) => {

    console.log(req.body);
    models.Community.findOne({
        where: { idx: req.body.idx, isdeleted: 'N',}
    }).then((result) => {
        let newObj = {
            title: req.body.title,
            content: req.body.content,
        }    
        models.Community.update(newObj, { where: { idx: req.body.idx } })
        .then((result) => {
            console.log(result);
            res.redirect('/community/free/read?idx=' +req.body.idx);
        })
})

}

exports.Free_createComment = (req, res) => {
    const user = req.session.user;
    
  
    // 24 Hour format
    let completeDate = moment().format("YYYY/MM/DD HH:mm:ss");
    
    console.log(completeDate);

    let object = {
        idx: req.body.idx,
        parentidx : req.body.parentidx,
        category : req.body.category,
        id: req.body.id,
        content: req.body.content,
        create_date: completeDate,
    }
    models.Comment.create( object )
    .then((result) => {
        //result == dataValues:{idx: , parentidx: ........}
        res.send(result);
    });

}
exports.Free_deleteComment = (req, res) => {
    models.Comment.findOne({
        where: { idx: req.body.idx, isdeleted: 'N',}
    }).then((result) => {
        let newObj = {
            isdeleted : 'Y',
        }    
        models.Comment.update(newObj, { where: { idx: req.body.idx } })
        .then((result) => {
            console.log(result);
            res.send("댓글삭제성공");
        })
    })
}