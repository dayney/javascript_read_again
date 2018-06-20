// 关于scoping的定义的使用
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
  let x = a[i]

}
for (let i = 0; i < b.length; i++) {
  let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}

// callbacks[0]() === 0
// callbacks[1]() === 2
// callbacks[2]() === 4
// console.log(callbacks[0]());
// console.log(callbacks[1]());
// console.log(callbacks[2]());

{
  function foo () { return 1 }
  // console.log(foo());
  // foo() === 1
  {
      function foo () { return 2 }
      // console.log(foo());
      // foo() === 2
  }
  // foo() === 1
  // console.log(foo());
}
