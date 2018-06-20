// New Built-In Methods

// Object Property Assignment
var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2);
// console.log(dest);

// array element finding
// console.log([ 1, 3, 4, 2 ].find(x => x > 3)); // 4
// console.log([ 1, 3, 4, 2 ].findIndex(x => x > 3));

//String Repeating
var depth = '>';
// console.log("*".repeat(4 * depth));
// console.log("foo".repeat(3));

// String Searching
