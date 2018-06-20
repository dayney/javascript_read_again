// 扩展参数处理
function f0 (x, y = 7, z = 42) {
  return x + y + z
}
// f(1) === 50
// console.log(f0(1));

//Rest Parameter
function f1 (x, y, ...a) {
  return (x + y) * a.length
}
// console.log(f1(1, 2, "hello", true, 7));

// Spread Operator
var params = ['hello', true, 7];
var other = [1, 2, ...params];
function f2(x, y, ...a){
  // console.log('a >>>');
  // console.log('x ----');
  // console.log(x);
  // console.log('x ----');
  // console.log('y*****');

  // console.log(y);
  // console.log('y*****');
  // console.log('&&&&&');
  // console.log(a);
  // console.log('&&&&&');

  // console.log(x + y);
  // console.log(a.length);
  // console.log('a >>>');
  return (x + y) * a.length;
}
// console.log('Spread Operator');
// console.log(f2(1, 2, ...params));
// console.log('other >>>');
// console.log(other);
// console.log('other >>>');
// console.log(f2(other));  // 这样传递参数只会全部给到x

// console.log(f2(...other));  // 这样传递参数才会分开

var str = 'foo';
var chars = [...str];
// console.log(f2(chars));
