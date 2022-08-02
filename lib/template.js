//객체에 있는 값 하나 하나를 ''프로퍼티''라고 부름.
// ex) template 객체안에 있는 값인 HTML은 프로퍼티이자 HTML은 프로퍼티의 이름임.
module.exports= {
  HTML: function(title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  List: function(filelist) {
    var list = '<ul>';
    var i=0;
    while(i<filelist.length){
      list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i+=1;
    }
    list = list+ '</ul>';
    return list;
  }
}
