function StopWatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    });
    Object.defineProperty(this, 'startTime', {
        get: function () { return duration }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime }
    });
    Object.defineProperty(this, 'running', {
        get: function () { return running }
    });
};

StopWatch.prototype.start = function () {
    if (this.running) {
        throw new Error('Stopwatch is already started...');
    }
    this.running = true;
    this.startTime = new Date();
}

StopWatch.prototype.stop = function () {
    if (!this.running) {
        throw new Error('Stopwatch is not started')
    }
    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime - this.startTime) / 1000;
    this.duration += seconds;
}

const watch = new StopWatch();
