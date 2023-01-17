function randNum() {
    console.log(Math.floor(Math.random() * 10));

    console.log(parseInt(Math.random() * 10));
    console.log(parseInt(Math.random() * 10));
    console.log(parseInt(Math.random() * 10));
    console.log(parseInt(Math.random() * 10));
}

randNum();

function randRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Random range : ', randRange(5, 9));

// from other base to decimal

function baseConvert(str, base) {
    return parseInt(str, base);
}

console.log('Binary Base : ', baseConvert('101011',2));
console.log('Binary Base : ', baseConvert('12',16));
