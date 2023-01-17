const obj = {
    type : 'OnRoad',
    Price : '1lac',
    fuel : 'Disel'
};

//Method-1 :: it is for both new and already existing
const another = {};
for (let key in obj)
    another[key] = obj[key];

console.log(another);


// Method-2 :: cloning in already existing object 
const car = {
    name : 'Audi',
    speed : '100km/h',
    avg : '10lit',
    color : 'maroon'
};
const another2 = Object.assign({}, obj);
console.log(another);

// Method-3 :: clonning in new object 
const another3 = { ...obj };
console.log(another);