const ADDRESS = {
    street : 'Maupakad Maharajganj',
    city : 'Maharajganj',
    zipCode : 273303
};

function showAddress(ADDRESS) {
    for (let key in ADDRESS)
        console.log(key, ' : ', ADDRESS[key]);
}

showAddress(ADDRESS);



// creating object using factory function and constructor function

function showAddress() {
    return {
        street : 'Maupakad Maharajganj',
        city : 'Maharajganj',
        zipCode : 273303
    };
}

const address1 = showAddress();
console.log(address1);

function ShowAddress() {
    this.street = 'Maupakad Maharajganj';
    this.city = 'Maharajganj';
    this.zipCode = 273303;
}

const address2 = new ShowAddress();
console.log(address2['street']);



// checking two objects are equal or not 
console.log('\n\n----------object equality check --------------');
const obj1 = {
    username : 'asdf@1',
    pass : '123asd'
}

const obj2 = obj1; // here both object are refering to same objects
console.log(obj1);
obj1.username = '1234567890';
console.log(obj2,'\n\n');

const obj3 = { ...obj1 }; // here obj1 and obj3 two different object
obj2.pass = 'asdfghjkl';
console.log(obj1);
console.log(obj2);
console.log(obj3, '\n\n');


function areEqual(add1, add2) {
    for (let key in add1)
        if (!( key in add2 )) return false;

    for (let key in add2) {
        if (!( key in add1 )) return false;
    }
    return true;
}

obj3['prev_pass'] = 'asdfghjkl';
let result = areEqual(obj1, obj3);
console.log(result);


function areSame(add1, add2) {
    //this function check whether this two object is refering to same address or not
    return add1 === add2;
}

let res = areEqual(obj1, obj2);
console.log(res);


//-------------- object Blog ------------
console.log('\n\n----------- object Blog ---------');
function createBlog(title, body, author, views, comments, isLive) {
    // console.log(comments);
    return {
        title,
        body,
        author,
        views,
        comments : [
                {
                    com_author : comments[0].com_author,
                    com_body : comments[0].com_body
                },
                {
                    com_author : comments[1].com_author,
                    com_body : comments[1].com_body
                }
            ],
        isLive
    };
}
let com = [{com_author:'amit', com_body:'chut hai'}, {com_author:'rohit', com_body:'sach hai'}]
let bd = '20 Died due to food poisining in kanpur, Restaurant lost their license';
let post1 = createBlog('Food Poisning', bd, 'Sachin Sharma', 2000, com, true);
console.log(post1);


//-------------- object Blog using constructor function ------------
console.log('\n\n');
let post = {
    title : 'Food Poisning',
    body : bd,
    author : 'Kapil',
    views : 2112,
    comments : [
            {
                com_author : com[0].com_author,
                com_body : com[0].com_body
            },
            {
                com_author : com[1].com_author,
                com_body : com[1].com_body
            }
        ],
    isLive : false
};

function Publish(status) {
    this.isLive = status
}

post = new Publish(false);
console.log(post,'\n\n');


//-------------- Price Range object ------------
console.log('\n\n---------- Price Range object-- -------');
const RANGE_FILTER = [
    {
        label : '$',
        tooltip : 'inexpensive',
        startRange : 1000,
        endRange : 5000
    },
    {
        label : '$$',
        tooltip : 'moderate',
        startRange : 5001,
        endRange : 10000
    },
    {
        label : '$$$',
        tooltip : 'expensive',
        startRange : 10001,
        endRange : 15000
    },
    {
        label : '$$$',
        tooltip : 'ultra expensive',
        startRange : 15001,
        endRange : 25000
    }
];

console.log(RANGE_FILTER);