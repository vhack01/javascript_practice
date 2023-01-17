console.clear();
const person3 = {
    firstName : 'Kapil',
    lastName : 'Garg',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if(typeof value !== "string") 
            throw new Error('Only string value is allowed');
        
        const part = value.trim().split(' ');
        if(part.length !== 2)
            throw new Error('Enter full name');
        this.firstName = part[0];
        this.lastName = part[1];
    }
};


console.log('fullName : ', person3.fullName);
try{
    person3.fullName = ' ';
}
catch(e) {
    console.log(e);
    // alert(e);
}

console.log('changed fullName : ', person3.fullName);


