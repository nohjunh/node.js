// array, object, function

var f= function(){
  console.log(1);
}
//배열의 원소로서 함수가 존재하는 상황
var a = [f];
a[0]();

//func라는 객체의 원소 즉 프로퍼티로 f를 주는 상황
var o = {
  func:f
}
o.func();
