// function createCircle(radius) {
//     const cirlce = {
//         radius : radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
//     return cirlce;
// }

function createCircle(radius) {
    console.log('new called')
    return {
        radius, // radius : radius --> when key and value has same name then write only once
        draw() {
            console.log('new canvas to draw');
        }
    };
}
let rad = 5;
const circle1 = createCircle(rad);
console.log(circle1['radius']);
const pi = 3.14;
circle1['area'] = pi * rad * rad;

console.log('parent function of createCircle: ',createCircle.constructor);


//-------------- Constructor Function ----------
console.log('\n\n-----------------')
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Creating new object');
        return 1;
    }; 
}
const obj = new CreateCircle(10);
obj['area'] = pi * obj['radius'] ** 2;

//-------------- Constructor property ----------

console.log(obj.constructor);
console.log(circle1.constructor);

console.log('\n---------Constructor Property---------------');
let x = {};
let x1 = new Object();
console.log(x.constructor);

let str = '' || "" || ``;
let str1 = new String();
console.log(str.constructor)


let num = 1;
let num1 = new Number();
console.log(num.constructor)

let bool = true || false;
let bool1 = new Boolean();
console.log(bool.constructor)


let s = `vishwas`;
console.log(s);