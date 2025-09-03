const id = document.getElementById("clock")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

let timeleft = 1500;
let interval;

function updateTimer() {
    let minutes = Math.floor( timeleft / 60);
    let seconds = Math.floor(timeleft % 60);
    id.innerHTML=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,"0")}`
    
}

start.addEventListener('click', function (e) {
    interval = setInterval(() => {
        timeleft--
        updateTimer();
        if (timeleft < 0) {
            stoptimer();
            timeleft = 1500;
            updateTimer();
        }
    }, 1000);
})

function stoptimer() {
    clearInterval(interval)
}

stop.addEventListener("click", () => {
    stoptimer();
})

reset.addEventListener("click", () => {
    timeleft = 1500;
    updateTimer();
    stoptimer();
})