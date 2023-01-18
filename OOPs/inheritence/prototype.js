console.clear();
let object = {
    oname: 'ABC'
};

let ObjectBase = Object.getPrototypeOf(object);
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString');
// console.log(descriptor);

// ========= Now to "SET" this property =========

Object.defineProperty(object, 'oname', {
    writable: false,
    configurable: false,
    enumerable: false // when false -> we can't traverse on 'oname' property
});

// delete object.oname;
// object.oname = 'vishwas';

console.log(Object.keys(object));


