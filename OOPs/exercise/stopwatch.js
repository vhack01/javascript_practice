
function Stopwatch() {

    let duration = 0, startTime, stopTime, running = false;
    this.val = 10;
    
    const base = Stopwatch.prototype;    
    base.start = () => { 
        if(running)     
            throw new Error('Stopwatch is already running');
        
        running = true;
        startTime = new Date();
    };
    base.stop = () => {
        if(!running)     
            throw new Error('stopwatch is not started');
        
        running = false;
        stopTime = new Date();
        const second =  (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += second;
    };
    base.reset = function() {
        duration = 0;
        startTime = 0;
        stopTime = 0;
        running = false;
    };
    Object.defineProperty(base, 'duration', {
        get : () => duration
    });


};

const watch = new Stopwatch();
    console.log(watch);
try {
    // console.log(watch.start());

}catch(e) {
    console.log(e);
}