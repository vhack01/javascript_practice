var magic = function () {
    console.log('Anonymous function called');
    return new Date;
}
// console.log(magic());


var magic = () => {
    console.log('Anonymous function called - 2');
    return new Date;
}
console.log(magic());

// for single line function
var curr_date = () => new Date;
console.log('current date : ', curr_date());


console.log('\n-----------------');

const transaction = () => {
    return 'ok';
};

console.log(transaction());


//-----------for parameterized anonymous function -----------
const add = (x, y) => {
    return x.concat(y);
};
console.log(add([1, 2, 3], [10, 20, 30]));

console.log('\n-----------------');
//-----------for single parameterized anonymous function -----------
const get = x => x * x;
console.log(get(10));

const get2 = (x, y) => x * y;
console.log(get2(100, 5));




