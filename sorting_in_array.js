let arr = ['a', 'e', 'x', 'd', 'c'];
arr.sort();

arr.reverse();


let obj = [
    { id : 2, lang : 'React.js'},
    { id : 1, lang : 'Node.js'},
    { id : 4, lang : 'C++.cpp'},
    { id : 3, lang : 'Java.java'}
];

// obj.sort(); .sort() will not work in case of object
console.log("\n------- sortd --------- : \n");
// console.log(obj);
const res = obj.sort(function(a , b){
    // a < b ==> -1
    // a > b ==> 1
    // a = b ==> 0
    console.log(a,' : ', b);
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
});

console.log(res);

