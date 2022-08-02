var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var helmet = require('helmet');

app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/', indexRouter);
//   /topic으로 시작하는 주소들에게 topicRouter라는 이름의 미들웨어를 적용하겠다.
app.use('/topic', topicRouter);



app.use(function(req, res, next){
  res.status(404).send('sorry cant find that!'); // 404이면 처리하는 code
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function(){
 console.log('Example app listening on port 3000');
});


/*
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
      } else {

    } else if(pathname === '/create'){
    
    } else if(pathname === '/create_process'){
    
    } else if(pathname === '/update'){
    
    } else if(pathname === '/update_process'){
  
    } else if(pathname === '/delete_process'){
      
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
*/