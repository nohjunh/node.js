//o는 객체이다. 객체는 값, 함수들을 그룹핑할 수 있다는 장점이 있다.
var o = {
  v1: 'kkkkkk1',
  v2: 'kkkkkk2',
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  }
}

o.f1();
o.f2();
