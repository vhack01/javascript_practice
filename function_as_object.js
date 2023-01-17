function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing a circle....');
    };
}

const c = new Circle(5);
console.log(c);

console.log('Circle name : ', Circle.name);
console.log('Circle length : ', Circle.length); // .length returns number of parameter in function


//Now, who is creating this Circle object/function ==> "Function" functon
console.log(Circle.constructor);


//------------- But how? ----------------
console.log('\n---------')
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing a circle....');
    };
}

const circle = new Circle(8);
console.log(circle);

//Parent function
const fcircle = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('drawing a circle....');
}`);

const ccircle = new fcircle(8);
console.log(ccircle);



// Every function/object has functions that are:
console.log('\n--------- object/functions functions and properties ------------');
function Animal(name, beh) {
    this.name = name;
    this.behavior = function() {
        console.log(beh);
    };
}

let an_name = ['Lion', 'Tiger', 'Cow'];
let an_beh = ['King', 'Runner', 'Milk'];
const AN = new Animal(an_name, an_beh);

console.log(AN.name);

// Animal.call({}, an_name, an_beh);
// Animal.apply({}, );
// console.log();





