console.clear();
const number = [1, 2, 4, 3, 1, 2, 1];

let count1 = countOccurence2(number, 4);
let count2 = countOccurence(number, 4);
let count3 = countOccurenceReduce(number, 2);
console.log('Occurance: ', count3);

function countOccurence (array, item) {
    const arr = [...array];
    let c = 0;
    for (let i of arr) {
        if (i == item) c++;
    }
    return c;
}

function countOccurence2 (array, item) {
    let arr = [...array];
    let c = 0;
    while (arr.length >= 0) {
        let ind = arr.indexOf(item);
        if(ind !== -1) {
            c++;
            arr = arr.splice(ind + 1);
        }
        else return c;
    }
    return c;
}

function countOccurenceReduce(array, item) {
    const arr = [...array];
    let res = arr.reduce((a, b) => {
        return b == item? a + 1 : a;
    }, 0);
    return res;
}   