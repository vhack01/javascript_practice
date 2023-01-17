console.clear();

const arr = [1, -2 , 2.2, 9, 8, 2, 1, 9, 8];



function except(array, exclude) {
    const excludedArray = [];
    for (let item of array) {
        if(!(exclude.includes(item)))
            excludedArray.push(item);
    }
    return excludedArray;
}

let result = except(arr, [1, 8]);
console.log(result);
