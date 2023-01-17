const num = [1, 2, 5, 4, 6];
console.clear();
//check whether every element is positive or not
const isPositive = num.every(function(value){
    console.log(value);
    return value >= 0;
});

console.log(isPositive);


//check whether any of the element is negitive or not
console.log('\n------- Check Negative -------');
const num2 = [-1, -2, -5, 4, -6];
const atLeastOnePositive = num2.some(value => value >= 0);

console.log(atLeastOnePositive);

