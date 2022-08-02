var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
// 세션미들웨어가 세션스토어에 request 객체의 세션객체를 추가함.
// 이거를 파일이 아니라 mysql로 연동하면 DB로 세션을 관리할 수 있음.
var app = express()
 
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store:new FileStore() 
}))
 
app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})
 
app.listen(3000, function () {
    console.log('3000!');
});