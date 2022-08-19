const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );
app.use(express.static('public'));
//퍼블릭 폴더에 정적파일 관리할거야.

const router = require("./routes");
app.use('/user', router);

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
