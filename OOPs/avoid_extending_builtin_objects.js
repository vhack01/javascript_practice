console.clear();
const player = {
    No : 1,
    Name : 'Dhoni',
    play() {
        console.log('playing....');
    }    
};


const proto = Object.getPrototypeOf(player);
proto.rest = function() {
    console.log('Player is resting.....');
}


const Umpire = {
    No : 1,
    Name : 'XXXX',
    doUmpire() {
        console.log('umpiring....');
    }    
};

