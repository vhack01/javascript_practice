function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Shape(color) {
    this.color = color;
    this.fun = function() {
        console.log('Shape function');
    }

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius,color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

let circle = new Circle(8, 'red');

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

let sq = new Square(90);
console.log(sq);

