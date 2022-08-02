var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

//get을 route, 라우팅이라고 한다. 방향 설정
//app.get('/', (req, res) => res.send('Hello world'))
router.get('/', function(request, response){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src="images/hello.png" style="width:300px; display:block; margin-top:100px;">
      `,
      `<a href="/topic/create">create</a>`
    );
    response.send(html);
});

module.exports = router;