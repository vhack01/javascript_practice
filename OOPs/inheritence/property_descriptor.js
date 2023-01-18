let vhack = { id: 1, name: 'vishwas' };
const objectBase = Object.getPrototypeOf(vhack);
const descriptor1 = Object.getOwnPropertyDescriptor(objectBase, 'toString');
const descriptor2 = Object.getOwnPropertyDescriptor(objectBase, 'hasOwnProperty');
console.log(descriptor1);
console.log(descriptor2);


console.log(vhack);
console.log(objectBase);


