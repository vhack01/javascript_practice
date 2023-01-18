// function Circle(radius) {
//     //Instance member
//     this.radius = radius;
//     this.move = function () {
//         this.draw();
//     }
// }
// const c1 = new Circle(10);
// const c2 = new Circle(20);

// //Prototype member
// Circle.prototype.draw = function () {
//     this.radius = 12;
//     console.log('Drawing...');
// }
// c1.move();


// // Iterating over instance and prototype member

// // Returns only Instance member
// console.log(Object.keys(c1));


// // It returns all (prototype + instance member)
// for (let key in c1)
//     console.log(key);

function X() {
    this.id = 1;
}
function Y() {
    this.id = 2;
}

const x = new X();
const y = new Y();

X.prototype.change = function () {
    console.log('X constructor function');
}

console.log(X.prototype);
console.log(Y.prototype);

console.log(Object.prototype);
console.log(Object.prototype);

/* Structure of inheritence

   Object
    ||
   XBase
    ||
    X

*/
