const a = ['A', 'B', 'C', 'D'];
const b = ['E', 'F', 'G', 'H'];

const combined = [...a, ...b];
const sliced = [...combined]; //or combined.slice()
console.log('Combined: ',combined);
console.log('Sliced: ',sliced);

