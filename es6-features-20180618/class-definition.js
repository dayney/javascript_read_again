// class definition
class Shape {
  constructor (id, x, y){
    this.id = id;
    this.move(x, y)
  }
  move(x, y){
    this.x = x;
    this.y = y;
    console.log('x::' + this.x + ':y::' + this.y);
  }
}

// let sh = new Shape(1, 3, 4);
// sh.move(5, 6);

// class inheritance
// class Rectangle extends Shape {
//   constructor (id, x, y, width, height) {
//       super(id, x, y)
//       this.width  = width
//       this.height = height
//   }
// }
// class Circle extends Shape {
//   constructor (id, x, y, radius) {
//       super(id, x, y)
//       this.radius = radius
//   }
// }

class Rectangle {
  constructor (width, height) {
      this._width  = width
      this._height = height
  }
  set width  (width)  { this._width = width               }
  get width  ()       { return this._width                }
  set height (height) { this._height = height             }
  get height ()       { return this._height               }
  get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
// console.log(r.area);


