console.clear();
function Circle(radius) {
    this.radius = radius;
}

let circle = new Circle(10);
let BaseCircle = Object.getPrototypeOf(circle);
console.log("BaseCircle: ", BaseCircle);
console.log("BaseCircle: ", Circle.prototype);
console.log("__proto__: ", circle.__proto__);


const player = {
    score : 3, 
    name : 'virat',
    sayHello() {
        console.log(this.name);
    }
};
let p1 = Object.create(player); 
console.log(Object.getPrototypeOf(p1) === player);




