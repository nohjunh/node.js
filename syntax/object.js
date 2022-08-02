var members= ['egoing','k093','fwe'];
console.log(members[1]);
var i =0;
while(i<members.length){
  console.log("array loop", members[i]);
  i+=1;
}

var roles = {
  'programmer':'egoing',
  'designer' : 'k093',
  'manager' : 'hoya'
}

console.log(roles.designer); // k8805
console.log(roles['designer']); // k8805

for(var n in roles){
  console.log("object => ", n, "/", 'value => ', roles[n]);
}
