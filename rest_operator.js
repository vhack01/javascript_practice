console.clear();
function sum(discount, ...arg) {
    let total = arg.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 1, 2, 3, 4, 5));