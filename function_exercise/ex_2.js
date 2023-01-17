console.clear();


const circle = {
    rad : 2,
    get radius() {
        return this.rad;
    },
    set radius(rad) {
        if (typeof rad !== 'number') 
            throw new Error('Only number is allowed');

        this.rad = rad;
    },
    get area() {
        return Math.PI * this.rad ** 2;
    }
};

console.log(circle.radius);
console.log(circle.area);

//exception handling
try {
    console.log('-------');
    circle.radius = 8;
}
catch(e) {
    console.log(e);
}
console.log(circle.radius, circle.area);
