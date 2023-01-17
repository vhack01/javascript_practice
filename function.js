var global = 5;

function fun1() {
    console.log("function1");
    oopsVar = 10; // here it is global variable (without "var" declaration)
    var OOPSVAR = 100; //here it local variable (with "var" declaration)
    checkType();
}
function checkType() {
    if(typeof(global) != 'undefinded') {
        console.log('its global variable');
    }
    else 
        console.log('its not global variable');
    
    if(typeof(oopsVar) != 'undefined') console.log('oopsVar is global variable');
    else console.log('oopsVar is not global variable');
}
fun1();

function add(a, b) {
    return a + b;
}
function minus(c, d) {
    return c - d;
}

console.log(add(5, 4));
console.log(minus(5, 4))

console.log('\n\n----------------------');
//------------- inner function -----------
function trans() {
    let amt = 0;
    function add(x) {
        amt += x;
    }
    function get() {
        return amt;
    }
    add(10);
    add(1010);
    return get();
}

// console.log(trans().add(1000));  Its wrong, you want call inner function from outside function
console.log(trans());








