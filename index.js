const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');

const circle = document.querySelector('circle');
let perimeter = 2 * Math.PI * circle.getAttribute('r');

let totalDuration = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(duration){
    totalDuration = duration;
    circle.setAttribute('stroke-dasharray', perimeter);
    console.log("Time to Start the Timer!");
  },
  onPause(){
    console.log("Timer has paused");
  },
  onTick(timeRemaining){
    console.log("Inside onTick()");
    circle.setAttribute('stroke-dashoffset',
      perimeter * timeRemaining/totalDuration - perimeter
    );
  },
  onComplete(){
    circle.setAttribute('stroke-dashoffset', perimeter);
    console.log("Times Up!");
  }
});
