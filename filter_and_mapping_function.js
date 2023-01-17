let arr = [1, 3, 2, 4, 6, 7, 9, 8];
const std_name = ['Kapil', 'Amit', 'Sachin', 'Rohit', 'Aditya', 'Ali bhai', 'vishwas', 'Adarsh'];

//------------ Filter function ---------------
// used to filter value from array(number | object)
let filtered = arr.filter(value => value % 2 == 0); //returns all even values from array
console.log('Filtered Elements : ', filtered);


//------------ Map function---------------
const mapped = filtered.map(function(value){
    let html = '<li>' + value + '</li>';
    return html;
});
console.log('Mapped elements : \n', mapped);


//------------ join function---------------
let joined ='<ul>' +  mapped.join('') + '</ul>';
console.log('Joined elements : \n', joined);


//------------ again  Map function---------------
const STUDENT_DETAILS = filtered.map(value => {
    const student = {
        std_id : value,
        std_nam : (std_name.includes(std_name[value])) ? std_name[value] : 'none'
    };
    return student;
});

// ----- Shorter method ------
// use round braces () when you wants to return object from call back function
const STUDENT_DETAILS2 = filtered.map(value => ({std_id : value, std_nam : (std_name.includes(std_name[value])) ? std_name[value] : 'none'}) );
console.log(STUDENT_DETAILS);

console.log(STUDENT_DETAILS2);


// --------------- chaining filter and map function ---------------
console.clear();
const name_arr = ['Kapil', 'Amit', 'Sachin', 'Rohit', 'Aditya', 'Ali bhai', 'vishwas', 'Adarsh'];

// let filt = name_arr.filter(value => value[0] == 'A');
// let mapp = filt.map(val => ({marks : val}));


// ========= cleaner code (chaining) ========
let chain = name_arr
    .filter(value => value[0] == 'A')
    .map(val => ({marks : val}))
    .filter(object => object.marks.length >= 5);


console.log(chain);




