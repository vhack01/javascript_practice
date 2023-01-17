console.clear();

function arrayFromRange(min, max) {
    let arr = []
    while(min <= max) {
        arr.push(min++);
    }
    return arr;
}

let res = arrayFromRange(-10, -1);
console.log(res);