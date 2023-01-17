const REGNO = 12116613

// REGNO = 12115403
console.log(REGNO);

const arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    arr[i] += 10;
    console.log(arr[i]);
    
}

// arr = [2, 3, 3, 5]; // since it is const you cant update it
// console.log(arr);

console.log('\n========================\n');
function freezeObj() {
    const OBJ = {
        pi : 3.1412
    };


    // this is error to change whole object but can change each properties of object 
    // obj = {
    //     pi : 12.232
    // }

    OBJ.pi = 12.11; // this is allowed
    console.log(OBJ);

    Object.freeze(OBJ); // it will free the properites of object and not let them change
    try {
        OBJ.pi = 122.11; // this is allowed
    }
    catch(ex) {
        console.log(ex);
    }
    
    console.log(OBJ.pi);

}

freezeObj();
