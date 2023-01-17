// ----------- Array -------------

// var arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// console.log(arr); // printing whole string 

// var arr1 = [];
// console.log(arr1.length);


// arr1 [0] = 5;
// arr1 [1] = 10;
// arr1 [3] = 15;
// arr1 [2] = 35;
// console.log(arr1);
// console.log(arr1.length);

console.log('\n\n')
var arr3 = [];
arr3[0] = 5;
arr3[1] = 51;
arr3[2] = 522;

console.log(arr3);
l = arr3.length;
console.log(arr3[l-1]);


// -------------- 2D array ----------

var arr4 = [[1, 2, 3], ['vishwas', 'Kapil']];
console.log(arr4[0][0] + ': ' + arr4[1][0]);
console.log('type of "arr4" : ' + typeof(arr4));

//declare 2d array with initialization
console.log('----------2d array ---------');
var new_arr = [
    ['A', 'V', 'K', 'S'],
    ['AMIT', 'VIKAS', 'KAPIL', 'SACHIN']
];
console.log(new_arr);
console.log(new_arr[0][2]);

// ------------------
console.log('\n\n---------- ---------');
var arr5 = []
arr5.push([5, 4, 5, 7 ,'L']);
arr5.push([1, 6, 0 ,'K']);
console.log(arr5);

var poppedElem = arr5.pop()
console.log(typeof('Removed element : ' + poppedElem));// string type
console.log(typeof('Removed element : ' , poppedElem));// object type

console.log('\n\n');
var arr6 = [1, 'Vishwas' , 4, 'L', 1.2];
console.log('Pop: ',arr6.pop()); // remove element from LAST
console.log(arr6)
console.log('shift: ',arr6.shift()); // remove element from FRONT
console.log(arr6)

console.log('unshift: ',arr6.unshift('NEWWORD','$')); // add element from FRONT
console.log(arr6)
console.log(arr6.unshift('@'));
console.log(arr6)


//---------------------------------------------------------------------








