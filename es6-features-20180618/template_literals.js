// Template Literals
let customer = { name: "Foo" };
let card = { amount: 7, product: "Bar", unitprice: 42 };
let message = `Hello ${customer.name} want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(message);

// Custom Interpolation
let bar = 'bar';
let baz = 'baz';
let quux = 'quux';
let str = 'get::' + `http://example.com/foo?bar=${bar + baz}&quux=${quux}`;
console.log(str);

// Raw String Access
function quux1 (strings, ...values) {
  console.log(strings);
  console.log(typeof strings);
  console.log(strings[0]);  // 11, 22, 33, 44
  console.log(typeof strings[0]);  // string
  // strings[0] === "foo\n"
  // strings[1] === "bar"
  // strings.raw[0] === "foo\\n"
  // strings.raw[1] === "bar"
  // values[0] === 42
}
console.log('------');
console.log(quux1`11, 22, 33, 44`);  // 这样调用传递进去的是一个对象
console.log(`foo\n${ 42 }bar`);
console.log('------');

console.log('++++++');
console.log(String.raw`foo\n${ 42 }bar`);
console.log('++++++');

