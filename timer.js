class Timer {

  constructor(duration, startButton, pauseButton, callbacks){
    this.duration = duration;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onPause = callbacks.onPause;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }

  start = () => {
    if(this.timeRemaining <= 0){
      console.log("Please enter a time > 0 ");
      this.timeRemaining = 0;
      return;
    }
    if(this.onStart)
      this.onStart(this.timeRemaining);
    this.timeRemaining = this.timeRemaining - 0.05;
    this.timer = setInterval(this.tick, 50);
  }

  pause = () => {
    if(this.onPause)
      this.onPause();
    clearInterval(this.timer);
  }

  tick = () => {
    if(this.timeRemaining > 0){
      this.timeRemaining = this.timeRemaining - 0.05;
    }
    if(this.timeRemaining == 0){
      if(this.onComplete){
        this.onComplete();
        clearInterval(this.timer);
        return;
      }
    }
    if(this.onTick){
      this.onTick(this.timeRemaining);
    }
  }

  get timeRemaining(){
    return parseFloat(this.duration.value);
  }

  set timeRemaining(timeRemaining){
    this.duration.value = timeRemaining.toFixed(2);
  }
}
