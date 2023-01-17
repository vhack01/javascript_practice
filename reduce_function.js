let arr = [1, 4, 5, 43, 46, 3];

let sum = 0;
for (let i of arr)
    sum += i;
console.log(sum);


// ------------ or ------------
// a = 1, c = 4 ==> a = 5
// a = 5, c = 5 ==> a = 10
// a = 10, c = 43 ==> a = 53
// a = 53, c = 46 ==> a = 99
// a = 99, c = 3 ==> a = 102
let res = arr.reduce((accumulator, currValue) => 
     accumulator + currValue
);
console.log('by reduce : ', res);
