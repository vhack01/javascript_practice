function Shape() {

};

Shape.prototype.duplicate = () => {
    console.log('Duplicate');
};

let shape = new Shape();

// ------- Circle ---------
function Circle() {

};

/* 
 Creating object methods:
    new Circle(10) === Circle.prototype.constructor(10); 
 */

// doing this we looses the constructor of Circle object
Circle.prototype = Object.create(Shape.prototype);

//So, we need to add constructor in 'Circle.prototype'
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function () {
    console.log('Draw Circle');
};

let c = new Circle();

