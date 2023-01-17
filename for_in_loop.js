const poor = {
    name : 'asd',
    worth : 10000,
    status : 'Poor'
}

for (let key in poor) {
    console.log(key,' : ',poor[key]);
}

let arr = [1, 2, 3, 4, 5];
let index = 0;
for (index in arr)
    console.log(index,': ',arr[index]);

let colors = ['red', 'green', 'yellow', 'Black', 'Cyan'];

for (let color of colors) {
    console.log(color);
}

