console.clear()
var video = {
    title : 'XYZ',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); //here this is pointing to window object
        });
    }
};

// console.log(video);

// ------------ Solution - 1 ---------------
var video = {
    title : 'ABC',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        },this);
    }
};


// ------------ Solution - 2 ---------------
var video = {
    title : 'ABC',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this;
        console.log('\n-----solution 2 -----\n');
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

// console.log(video);
video.showTags();


// ------------ Solution - 3 (Explaination)---------------
// console.clear();
function playVideo(a, b) {
    console.log(this, a, b);
}

// playVideo(); // by default this=>points to window object
playVideo.call({name : 'vhack'}, 1, 2); // by using .call() => it points to current object passed with it
playVideo.apply({name : 'vishwas'}, [1, 2]);

// const func = playVideo.bind({name : 'bind'});
// func();

playVideo.bind({name : 'bind'})();

// ------------ Solution - 3 (Actual Solution : using bind() method)---------------

var video = {
    title : 'ABC',
    tags : ['a', 'b', 'c'],
    showTags() {
        console.log('\n-----solution 3 -----\n');
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags();


// ------------ Solution - 4 (Best Solution : using arrow function)---------------

var video = {
    title : 'ABC',
    tags : ['a', 'b', 'c'],
    showTags() {
        console.log('\n-----solution 4 -----\n');
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();