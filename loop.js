var arr = [];
var i = 1;
while (i < 11) {
    arr.push(i++);
}
// console.log(arr)


// ------------ For loop ---------

function traverse(arr) {
    console.log("Arr length : ",arr.length);
    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j], ' ');
        }
    }
}

traverse([[1, 2], [3, 4], [5, 6]]);