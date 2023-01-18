function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate Circle');
}


function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('Square Duplicate');
}

let circle = new Circle();

const shapes = [
    new Circle(),
    new Square
];

for (let shape of shapes) 
    shape.duplicate();