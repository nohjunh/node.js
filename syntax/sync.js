var fs = require('fs');

/*
//readFile sync 동기
console.log('A');
var result= fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//readFile NOT sync 비동기
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function (err, result) {
  console.log(result);
});
console.log('C');
