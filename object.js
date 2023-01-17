/*var details = {
    'name' : 'vishwas kumar',
    'regno' : 12116613,
    'stream' : 'CSE',
    'status' : 'admitted',
    'exp year' : 4

};
console.log('details oject : ',details);

//----------Accessing by dot(.)--------- 
var val = [];
val.push(details.name);
val.push(details.regno);
val.push(details.status);

console.log(val);

//----------Accessing by []--------- 
console.log(details['name']);
console.log(details['exp year']);

//-------------Adding new element in object ------------------
details.name = 'Sachin Sharma';
details['exp year'] = 10;
details['hostel'] = 'BH4';
console.log(details);

//-------------Deleting new element from object ------------------
delete details.hostel;
console.log(details);

details[12116613] = 'vishwas kumar';
console.log(details);

delete details[12116613];
console.log(details);

//--------------- object lookup ---------------

function objects(val) {
    var object ={
        'name' : 'Kapil Garg',
        'regno' : 12115403,
        'exp' : 15,
    };
    var result = ' ';
    // Same as creating object in javascript
    switch(val) {
        case 'name':
            result = 'Vishwas kumar';
            break;
        case 'regno':
            result = '12116613';
            break;
        case 'exp':
            result = 10;
            break;
        default:
            result = 'undefinded';
    }
    result = object[val];
    return result;
}


console.log('Result : ', objects('name'));

// --------------- hasOwnProperty(prop_name) -----------
var myObj = {
    'Company' : 'Tech',
    'Employees' : "1000+",
    'Est.' : 1980,
    'networth' : '$1Billion'
};

function checkProp(prop_name) {
    console.log(myObj.hasOwnProperty(prop_name));
    if(myObj.hasOwnProperty(prop_name)){
        return myObj[prop_name];
    }
    else 
        return '404Not Found';
}

console.log('Returned Result : ', checkProp('company'));*/

// --------------- Object Complexity -----------
var arr = [
    {
        'Singer' : 'Diljit Doshan',
        'Song name' : 'Born to shine',
        'release_date' : '2020',
        'rating' : '5 star',
        'released_plat' : ['Spotify', 'JioSavaan','Apple Music', 'Gaana']
    }
];
console.log(arr[0].released_plat);

// --------------- Accessing Nested Array -----------

var obj = [
    {
        type : 'flower',
        list : ['Rose','Lily Flower','SunFlower', 'dahelia']
    },{
        type : 'Animal',
        list : ['Lion','Tiger','Rat', 'Pig']
    }
]
console.log(obj.length)
var data = obj[0].list[0];
console.log(data);

//Empty object 
var newObj = {};
console.log(typeof(newObj));


 // --------------- object length -----------
 console.log('\n----------------');
var student = {
    bh4 : {
        1 : {
                first_name : 'vishwas',
                last_name : 'Gautam',
                regno : 1,
                stream : 'CSE',
                hostel : {floor : 8,block : 'D', room : 812}
        },
        2 : {
            first_name : 'Kapil',
            last_name : 'Garg',
            regno : 2,
            stream : 'CSE',
            hostel : {floor : 8,block : 'D', room : 812}
        } 
    },
    bh3 : {
        3 : {
                first_name : 'vishwas',
                last_name : 'Gautam',
                regno : 1,
                stream : 'CSE',
                hostel : {floor : 8,block : 'D', room : 812}
        },
        4 : {
            first_name : 'Sachin',
            last_name : 'Sharma',
            regno : 4,
            stream : 'CSE',
            hostel : {floor : 8, block : 'D', room : 802}
        } 
    }
}
// Object.keys(object_name) : to get all the keys from object
var keys = Object.keys(student.bh4);
console.log("keys : ", keys);

var vals = Object.values(student.bh4[1]);
console.log('Values: ', vals);


var copyObj = student; // copying object
console.log(typeof(copyObj));

var a = true || 10 // when false the after || else before ||
console.log(a);




