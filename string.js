// var a = 5;
// console.log(a);
// a++;
// console.log("after:"+a);
 

// let b = "I am \"double\" quotes";
// console.log(b);

// console.log('\n\n');
// // concatination
// s1 = "My name vishwas kumar. \nRecently I joined \\ Lpu collage \nwhich is in punjab ";
// console.log(s1);
// cat = 'Java' + 'Script';
// console.log(cat);

// var s2 = 'Javascript';
// s2 += ' is scripting language';
// console.log('\n\n'+s2);

// // ------------String length ---------------
// var h = 'javaScript';
// console.log('Length of ' + h +' is ' + h.length);
// console.log(h[0]);




// ------------String functions ---------------
let s = 'hi';
console.log(typeof(s));
console.log(s.constructor,'\n\n');

let another = new String('hello') ;
console.log(another);

let str = 'My first name is vishwas kumar';
console.log('String length: ', str.length);
console.log('String includes: ', str.includes('is'));
console.log('String startsWith: ', str.startsWith('My'));
console.log('String endsWith: ', str.endsWith('kumar'));
console.log('String indexOf: ', str.indexOf('i'));
console.log('String lastIndexOf: ', str.lastIndexOf('i'));
console.log('String replace: ', str.replace('i', 'x'));
console.log(str);
console.log('String toUpperCase: ', str.toUpperCase());

let str2 = '   My second name is Atul kumar   ';
console.log('String trim:', str2.trim());
console.log('String trimStart:', str2.trimStart());
console.log('String trimEnd:', str2.trimEnd());

console.log('String split:', str.split(' '));
