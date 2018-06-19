// String.raw 函数 (JavaScript)
// 返回模板字符串的原始字符串形式
// String.raw`templateStr`;
// String.raw(obj, ...substitutions);
var name = "bob";

console.log(`hello \t${name}`);
console.log(String.raw`hello \t${name}`);
console.log(String.raw({ raw: 'fred'}, 'F', 'R', 'E'));  // fFrReEd
// The following usage for String.raw is supported but
// is not typical.
