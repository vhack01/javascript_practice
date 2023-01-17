// var a = 23;
// var b = 12;

// var a = a + b;
// console.log(a);


// let a = 23;
// let b = 12;

// // let a = a + b; // duplicate declaration is not allowed
// console.log(a);

//--------- let : local scope -------
let a = 10;
if (5 % 2 == 1) {
    // let a = 5; // duplicate declaration is not allowed
    a = 20;
}
console.log('5 is not even: ', a);

//--------- var : global scope -------
if (5 % 2 == 1) {
    'use strict';
    var b = 5;
}
console.log('5 is not even: ', b);


