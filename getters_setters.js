console.clear();
const person = {
    1 : {
        firstName : 'Kapil',
        lastName : 'Garg'
    },
    2 : {
        firstName : 'Sachin',
        lastName : 'Sharma'
    }
};
//if we have thousands of name in object then we need to write person.firstName and person.lastName thousand time ::: Solution using getters and setters
console.log(`fullName : ${person[1].firstName} ${person[1].lastName}, ${person[2].firstName} ${person[2].lastName}`);



//------------ Method 2 --------------------
console.clear();

const person2 = {
        firstName : 'Kapil',
        lastName : 'Garg',
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
};
//this is readOnly : we can't change anything :::::> to read and write both use (Getters and setters)
console.log('fullName : ', person2.fullName());


//------------ Method 3: Getters and setters --------------------
console.clear();
const person3 = {
    firstName : 'Kapil',
    lastName : 'Garg',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const part = value.split(' ');
        this.firstName = part[0];
        this.lastName = part[1];
    }
};

console.log('fullName : ', person3.fullName);
person3.fullName = 'vishwas kumar';
console.log('changed fullName : ', person3.fullName);