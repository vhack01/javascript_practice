const a = ['A', 'B', 'C', 'D'];
const b = ['E', 'F', 'G', 'H'];

const combined = [...a, ...b];

for (let i of combined) 
    console.log(i);

console.log('\n------forEach loop -------');
combined.forEach(function(val, index, arr){
   console.log(val, index, arr);
});

