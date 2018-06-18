// arrow function 箭头函数
// 1. Expression Bodies
let evens = [2, 3, 4, 5];
odds  = evens.map(v => v + 1)
console.log(odds);

pairs = evens.map(v => ({ even: v, odd: v + 1 }))
console.log(pairs);

nums  = evens.map((v, i) => v + i + 1)
console.log(nums);

// 2. Statement Bodies
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v)
})

console.log('fives start');
console.log(this);   // Window
console.log(fives);  // 5
console.log(this.fives);  // undefined
console.log('fives end');

// 3. Lexical this
console.log(this);
console.log(this.nums);
console.log(fives);
console.log(this.fives);
// this.fives = [];
this.nums.forEach((v) => {
  if (v % 5 === 0){
    console.log(this);
    this.fives.push(v);
  }
})
console.log(this.fives);
