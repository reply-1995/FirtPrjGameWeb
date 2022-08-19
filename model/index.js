const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];
//txt. 처럼 걍 .json도 쓸수있다.

// const a require(../config/config.json);
// const a {"development" : {} 

const db = {};
const sequelize = new Sequelize(
    //여기s는 저위의 require(sequelize)와 다른거임
    config.database, // "sesac"
    config.username, // "user"
    config.password,
    config //{"host" : 'local', ...}
);

//순서임. database, username,~이순서임

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequlize: Sequelize};

// model폴더안에 있는 User파일에서 내보내 준 함수를 (sequelize, Sequelize)인자를 넣어줘서 바로 실행한다.
db.User = require("./User")(sequelize, Sequelize);
// db = {sequelize: sequelize, Sequlize: Sequelize, User: model};


module.exports = db;