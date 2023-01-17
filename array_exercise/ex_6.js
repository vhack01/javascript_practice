console.clear();
const number = [1, 2, 4, 5, 3, 9];
let max = getMax(number);
console.log('max: ', max);

function getMax(array) {
    if (array.length == 0) return;
    let res = array.reduce((a, b) => (a > b)? a : b);
    return res;
}