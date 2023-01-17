console.clear();

function includes (array, search) {
    for (ele of array) 
        if (ele === search) return true;
    return false;
}

const arr = [1, -2 , 2.2, 'javascript', true];
let res = includes(arr, true);
console.log(res);