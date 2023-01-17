console.clear();

//var ==> function-scoped 
//let | const ==> block-scoped 

function start() {
    for (var i = 0; i < 5; i++)
        console.log(i);

}
    
start();


//---------------------------------
console.clear();
var color = 'red';
console.log(color);