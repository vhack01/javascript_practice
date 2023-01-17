const obj = {
    type : 'Luxary',
    Range : (1000000, 5000000),
    status : 'not'
};

for (let i in obj) 
    console.log(i,': ',obj[i]);
    
for (let key of Object.keys(obj)) 
    console.log(key,': ', obj[key]);

console.log('\n\n---------------------------------');
for (let entry of Object.entries(obj)) 
    console.log('Array is returned : ',entry);

console.log('\n\n------- To check key exist in object or not ------');

if ('type' in obj) console.log('Yes');