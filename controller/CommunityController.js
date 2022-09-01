const models = require("../model"); // -> 시퀄라이즈에 사용

const moment = require("moment"); //datetime format 해주는 module
//const { DATE } = require("sequelize");
var func = require('../public/js/func');




exports.Free_page = (req, res) => {
    const user = req.session.user;
    models.Community.findAll({
        where: {isdeleted: 'N', category: 'free',}
    }) 
    .then((data) => {
        //console.log(result);
        if (user != undefined) {
            models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("community_freeList", {isLogin: true, user: user, userdata: result, data: data});
            })
        } else {
            res.render("community_freeList", {isLogin: false, data: data});
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
        models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("community_freeWrite", {isLogin: true, user: user, userdata: result});
            })
    } else {
        res.redirect('/user/login');
    }
}


exports.community_read = (req, res) => {
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
            where: {isdeleted: 'N', parentidx: result.idx, category: result.category,}
        }) 
        .then((com) => {


            if (user != undefined) {
                models.User.findOne({where: {id: user}})
                .then((userdata) => {
                    res.render("community_view", {isLogin: true, user: user, userdata: userdata, result: result, com: com, elap: func.elapsedTime,});
                })
            } else {
                res.render("community_view", {isLogin: false, result : result, user: user, com: com, elap: func.elapsedTime,});
            }
        });
    })

}

exports.community_delete = (req, res) => {

    models.Community.findOne({
        where: { idx: req.query.idx, isdeleted: 'N',}
    }).then((result) => {
        let newObj = {
            isdeleted : 'Y',
        }    
        models.Community.update(newObj, { where: { idx: req.query.idx } })
        .then((result) => {
            console.log(result);
            if(req.query.category =='free'){res.redirect('/community/free');}
            else if(req.query.category =='screenshot'){res.redirect('/community/screen');}
            else if(req.query.category =='notice'){res.redirect('/community/notice');}
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
            res.redirect('/community/read?idx=' +req.body.idx);
        })
})

}

exports.createComment = (req, res) => {
    const user = req.session.user;
    

    let object = {
        idx: req.body.idx,
        parentidx : req.body.parentidx,
        category : req.body.category,
        id: req.body.id,
        content: req.body.content,
        create_date: new Date(),
    }
    models.Comment.create( object )
    .then((result) => {
        //result == dataValues:{idx: , parentidx: ........}
        res.send(result);
    });

}
exports.deleteComment = (req, res) => {
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


exports.Screen_saveReqID = (req, res) => {
    let object = {
        category : req.body.category,
        id: req.body.id,
        create_date: new Date(),
    }
    //console.log(object);
    models.ReqSaveImg.create( object )
    .then((result) => {
        //result == dataValues:{idx: , parentidx: ........}
        console.log("11111111111111111111111111111");
        res.send(result);
    });
}
exports.Screen_saveReqFile = (req,  res) => {
    models.ReqSaveImg.findOne({
        where: { idx: req.body.idx, id:req.body.id, create_date: req.body.ctime,}
    }).then((result) => {
        console.log("22222222222222222222222222222222");
        let newObj = {
            filename : req.file.filename,
        }
        models.ReqSaveImg.update(newObj, { where: { idx: req.body.idx, id:req.body.id, category: req.body.category, create_date: req.body.ctime,} })
        .then((result) => {
            console.log("33333333333333333333333333333");
            res.send(req.file.filename);
        })
    })
}

//스크린샷 게시판 들어가기
exports.Screen_page = (req, res) => {
    const user = req.session.user;
    models.Community.findAll({
        where: {isdeleted: 'N', category: 'screenshot'}
    }) 
    .then((data) => {
        //console.log(result);
        if (user != undefined) {
            models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("community_screenList", {isLogin: true, user: user, userdata: result, data: data});
            })
        } else {
            res.render("community_screenList", {isLogin: false, data: data});
        }
    });
}
//스크린샷게시판 글쓰기 들어가기
exports.Screen_writeview = (req, res) => {
    const user = req.session.user;
    let category = 'screenshot';
    if (user != undefined) {
        models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("community_screenWrite", {isLogin: true, user: user, userdata: result, category: category,});
            })
    } else {
        res.redirect('/user/login');
    }
}
//스크린샷게시판 글쓰고 저장
exports.Screen_write = (req, res) => {
    const user = req.session.user;
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;
    var content = req.body.content;
    var arr = content.split("<img src=\"", 2);
    arr = arr[1].split("\" style=",1);
    let RPimgsrc = arr[0];
    console.log(RPimgsrc);

    let object = {
        id: req.body.id,
        title: req.body.title,
        content: content,
        create_date: dateString,
        category: req.body.BoardName,
        RPimgsrc: RPimgsrc,
    }
    models.Community.create( object )
    .then((result) => {
        console.log(result);
        res.redirect('/community/screen');
    });
    
    
}
exports.Screen_modify = (req, res) => {
    console.log(req.body);

    var content = req.body.content;
    var arr = content.split("<img src=\"", 2);
    arr = arr[1].split("\" style=",1);
    let RPimgsrc = arr[0];

    models.Community.findOne({
        where: { idx: req.body.idx, isdeleted: 'N',}
    }).then((result) => {
        let newObj = {
            title: req.body.title,
            content: req.body.content,
            RPimgsrc: RPimgsrc,
        }    
        models.Community.update(newObj, { where: { idx: req.body.idx } })
        .then((result) => {
            console.log(result);
            res.redirect('/community/read?idx=' +req.body.idx);
        })
})
}



exports.Notice_page = (req, res) => {
    const user = req.session.user;
    models.Community.findAll({
        where: {isdeleted: 'N', category: 'notice',}
    }) 
    .then((data) => {
        //console.log(result);
        if (user != undefined) {
            models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("Notice_List", {isLogin: true, user: user, userdata: result, data: data});
            })
        } else {
            res.render("Notice_List", {isLogin: false, user: user, data: data});
        }
        
    });
    
}
exports.Notice_writeview = (req, res) => {
    const user = req.session.user;
    let category = 'notice';
    models.User.findOne({where: {id: user}})
            .then((result) => {
                res.render("community_screenWrite", {isLogin: true, user: user, userdata: result, category: category,});
            })
}
exports.Notice_write = (req, res) => {
    const user = req.session.user;
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    let object = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        create_date: dateString,
        category: req.body.BoardName,
    }
    models.Community.create( object )
    .then((result) => {
        console.log(result);
        res.redirect('/community/notice');
    });
}


exports.Notice_modify = (req, res) => {
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
            res.redirect('/community/read?idx=' +req.body.idx);
        })
})
}