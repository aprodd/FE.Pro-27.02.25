class Timer {
    constructor(elementID) {
        this.element = document.getElementById(elementID);
    }
    start(minutesQty) {
        const startingMinutes = minutesQty;
        let time = startingMinutes * 60;

        let updateTimer = setInterval(() => {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
        
            this.element.textContent = `${minutes}:${seconds}`;

            time--;

            if (time < 0) {
                clearInterval(updateTimer);
            } 
        }, 1000);
    }
}

const myTimer = new Timer('timer');
myTimer.start(2);