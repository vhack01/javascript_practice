console.clear();

//Every function as a object = "arguments" 
function sum () {
    let sum = 0;
    for (let i of arguments) 
        sum += i;
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));