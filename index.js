const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );
app.use(express.static('public'));
//퍼블릭 폴더에 정적파일 관리할거야.
app.use(session({
    secret: 'secret key'
}));
app.use(cookieParser('1234'));

const router = require("./routes");
app.use('/user', router);
const mainRouter = require("./routes/mainRouter.js");
app.use('/', mainRouter);
const gameRouter = require("./routes/gameRouter.js");
app.use('/game',gameRouter);
const communityRouter = require("./routes/communityRouter.js");
app.use('/community', communityRouter);

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
