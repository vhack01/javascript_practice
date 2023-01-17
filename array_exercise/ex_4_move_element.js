console.clear();

const number = [1, 2, 3, 4];
console.log('Original : ', number);

function move(array, index, offset) {
    let player = array[index];
    const arrLen = array.length;

    if((offset + index) >= arrLen || (offset + index) < 0) {
        console.error('Invalid move');
        return undefined;
    }
    
    let newArr = [...array];
    newArr.splice(index, 1);
    newArr.splice(index + offset, 0, player);
    return newArr;
}

console.log('Moved right: ', move(number, 1, 2));
console.log('Moved left: ', move(number, 2, -2));





