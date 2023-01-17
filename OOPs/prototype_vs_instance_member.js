function Circle(radius) {
    //Instance member
    this.radius = radius;
    this.move = function () {
        this.draw();
    }
}
const c1 = new Circle(10);
const c2 = new Circle(20);

//Prototype member
Circle.prototype.draw = function() {
    this.radius = 12;
    console.log('Drawing...');
}
c1.move();


//Returns only Instance member 
console.log(Object.keys(c1));  


// It returns all (prototype + instance member)
for (let key in c1)
    console.log(key);