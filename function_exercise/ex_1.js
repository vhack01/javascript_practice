console.clear();
const arr = [1, 2, 3, 4, 5];

function sumNumber(...args) {
    console.log(args);
    if (Array.isArray(args[0]))
        args = args[0];

    return args.reduce((a, b) => a + b);
}

console.log(sumNumber(arr));