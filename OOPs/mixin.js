console.clear();
function mixin(Destination, ...source) {
    Object.assign(Destination.prototype, ...source);
}
const canEat = {
    eat : function() {
        console.log('Eating...');
    }
};

const canWalk = {
    walk : function() {
        console.log('Walking...');
    }
};

const canSwim = {
    swim : function() {
        console.log('Swimming...');
    }
};


// const Person = Object.assign({}, canEat, canWalk);
// console.log(Person.walk());


function Person() {
    
}

mixin(Person, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish(){

}

mixin(Goldfish, canEat, canSwim);
const fish = new Goldfish();
console.log(fish);

