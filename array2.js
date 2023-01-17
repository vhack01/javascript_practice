const arr = [3, 4, 5, 6, 7];
//Adding element in array
// END
arr.push(8, 9, 10);


//Begining 
arr.unshift(1);


//Mid ==> .splice(startIndex, endIndex/DeleteCount, elementToAdd)
arr.splice(1, 5, 2, 2.1, 2.2);


//Mid ==> .splice(startIndex, DeleteCount, elementToAdd)


// Deleting element from array
//from END
arr.pop();


//from BEG
arr.shift();

//from MID
console.log('array: ', arr);
arr.splice(2, 2);
console.log('after array: ', arr);

//------------ Finding element from array ----------------
let ele = [1, 2, 4, 5, 43, 6, 7, 6, 9];

console.log('indexOf : ', ele.indexOf(6));
console.log('lastIndexOf : ', ele.lastIndexOf(6));

console.log('exist : ', ele.indexOf(1) !== -1);
console.log('includes : ', ele.includes(1));

//searching (from-to) index in array
console.log('indexOf : ', ele.indexOf(7, 4, 6));


//------------ Finding object from array ----------------
console.log('\n\n---------------------------\n');
const course = [
    { id : 1, name : 'a'},
    { id : 2, name : 'b'}
];
console.log(course.includes({ id : 2, name : 'b'})); // return false;
//So use find function 

const bool = course.find(function(course) {
    return course.name === 'b';
});
console.log(bool);

const bool2 = course.find(course => course.name === 'c');

console.log(bool2);




//------------ Deleting all elements of array ----------------
console.log('\n\n-------------Delete all --------------\n');

let darr = [1, 2, 54, 34, 54, 657, 6, 87, 8, 7];

// solution 1
darr = [];    // recommended

// solution 2
darr.length = 0;   // recommended

// solution 3
darr.splice(0);

// solution 4
while(darr.length > 0)
    darr.pop();

console.log(darr);



//------------ Using array functions ----------------
console.log('\n\n-------------Array functions --------------\n');

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['u', 'v', 'w', 'x'];

let combined = arr1.concat(arr2);

let slice = combined.slice(2, 4); // .slice(startIndex, endIndex)
console.log(combined);
console.log(slice,'\n\n');


//while concatinating object reference of object is copied
let obj1 = [{id : 1}, {id : 2}];
let obj2 = ['u', 'v', 'w', 'x'];

let obj_combined = obj1.concat(obj2);
obj1[0].id = 101; // reference of object is copied

console.log(obj_combined);
// console.log(slice);


