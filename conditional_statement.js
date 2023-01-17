a = 5;
console.log(a);


if (5 == 5) console.log('ok');
if (5 == '5') console.log('again ok');// it convert string to number and then compare the numbers

if (5 === 5) console.log('\n\nok');
if (5 === '5') console.log('again ok');// it convert string to number and then compare the numbers
else console.log('not ok');


console.log('\n----------');
if (5 != 5) console.log('\n----------\n TRUE');
else console.log('1. False');
if (5 != '5') console.log('Again TRUE');// it convert string to number and then compare the numbers
else console.log('again FALSE ');

console.log('\n\n----->>');
if (5 !== 5) console.log('\n\n----->>TRUE');
if (5 !== '5') console.log('AGAIN ====> TRUE');// it convert string to number and then compare the numbers
else console.log('AGAIN ====> FALSE');


