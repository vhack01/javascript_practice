
function Stopwatch() {
    let duration = 0, startTime, stopTime, running = false;
    
    this.start = () => {
        if(running)     
            throw new Error('Stopwatch is already running');
        
        running = true;
        startTime = new Date();
    };
    this.stop = () => {
        if(!running)     
            throw new Error('stopwatch is not started');
        
        running = false;
        stopTime = new Date();
        const second =  (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += second;
    };
    this.reset = function() {
        duration = 0;
        startTime = 0;
        stopTime = 0;
        running = false;
    };
    Object.defineProperty(this, 'duration', {
        get : () => duration
    });
};
const time = new Stopwatch();
try {
    console.log(time.start());
    console.log(time.stop());

}catch(e) {
    console.log(e);
}





