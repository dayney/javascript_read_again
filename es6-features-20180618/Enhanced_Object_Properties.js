// Enhanced Object Properties
// Property Shorthand
var x = 0, y = 0
obj0 = { x, y }
console.log(obj0);

// Computed Property Names
function quux() {
  return 'ww';
}
let obj = {
  foo: "bar",
  ["baz" + quux()] : 42
}
console.log(obj);
console.log(obj[ "baz" + quux() ]);

// Method Properties

objFn = {
  foo (a, b) {
    return a + b + 'fooFn';
  },
  bar (x, y) {
    return x + y + 'barFn';
  },
  *quux (x, y) {
    return x + y + '*quux';
  }
}

console.log(objFn.foo(11, 22));
console.log(objFn.bar(11, 22));
console.log(objFn.quux(11, 22));
