console.clear();
const def = {
    id : 1
};

function callMe() {
    this.dial = 'yes';
    console.log(this);
}
let con = callMe.call({no : 1});
console.log(con);

