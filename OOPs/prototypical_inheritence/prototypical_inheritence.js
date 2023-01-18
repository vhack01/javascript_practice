function Shape() {

};

Shape.prototype.duplicate = () => {
    console.log('Duplicate');
};

let shape = new Shape();

// Circle
function Circle() {

};

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log('Draw Circle');
};

let c = new Circle();
// console.log(Circle.prototype);
