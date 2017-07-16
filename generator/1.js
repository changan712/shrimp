

function* gen(){
  yield 1;
  yield 2;
}


for(let i of gen()){
    console.log(i);
}

let b = {};
b[Symbol.iterator] = gen ;


console.log([...b])




function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}
var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var c = foo(5);
c.next() // { value:6, done:false }
c.next(12) // { value:8, done:false }
c.next(13) // { value:42, done:true }

