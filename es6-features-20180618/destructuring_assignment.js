// destructuring assignment

// Array Maching
let list = [ 1, 2, 3 ]
let [ a, , b ] = list;
console.log('a::' + a);
console.log('b::' + b);
[ b, a ] = [ a, b ]
console.log('a::' + a);
console.log('b::' + b);

// Object Matching, shortdhand Notation
function getASTNode(){
  return {
    op: '+',
    lhs: 'left',
    rhs: 'right'
  }
}

let { op, lhs, rhs } = getASTNode();
console.log('op::' + op);
console.log('lhs::' + lhs);
console.log('rhs::' + rhs);

// Object Matching， Deep Matching
function getASTNode1(){
  return {
    op1: '+',
    lhs1: {
      op2: 'left'
    },
    rhs1: 'right'
  }
}
console.log(getASTNode1());
let { op1: a1, lhs1, rhs1: c1 } = getASTNode1();
// console.log('op1::' + op1);
console.log('a1::' + a1);
console.log('lhs1::' + lhs1);
console.log(lhs1);
// console.log('rhs1::' + rhs1);
console.log('c1::' + c1);

// Object And Array Matching, Default Values
let obj = { a2: 1 };
let list1 = [ 1 ];
let { a2, b2 = 2 } = obj;
console.log('a2::' + a2);
console.log('b2::' + b2);
let [ x2, y2 = 2 ] = list1;
console.log('x2::' + x2);
console.log('y2::' + y2);

// Parameter Context Matching
function f ([ name, val ]) {
  console.log(name, val)
}
function g ({ name: n, val: v }) {
  console.log(n, v)
}
function h ({ name, val }) {
  console.log(name, val)
}
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });

// Fail-Soft Destructuring
let list3 = [ 7, 42 ];
let [ a3 = 1, b3 = 2, c3 = 3, d3 ] = list3;
console.log('a3:' + a3);
console.log('b3:' + b3);
console.log('c3:' + c3);
console.log('d3:' + d3);
