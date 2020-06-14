class Timer {

  constructor(duration, startButton, pauseButton, callbacks){
    this.duration = duration;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onPause = callbacks.onPause;
      this.onComplete = callbacks.onComplete;
    }
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }

  start = () => {
    if(this.timeRemaining < 0){
      console.log("Please enter a time > 0 ");
      this.timeRemaining = 0;
      return;
    }
    if(this.onStart)
      this.onStart();
    this.timeRemaining = this.timeRemaining - 1;
    this.timer = setInterval(this.tick, 1000);
  }

  pause = () => {
    f(this.onPause)
      this.onPause();
    clearInterval(this.timer);
  }

  tick = () => {
    if(this.timeRemaining > 0)
      this.timeRemaining = this.timeRemaining - 1;
    if(this.timeRemaining == 0){
      if(this.onComplete)
        this.onComplete();
      clearInterval(this.timer);
    }
  }

  get timeRemaining(){
    return parseFloat(this.duration.value);
  }

  set timeRemaining(timeRemaining){
    this.duration.value = timeRemaining;
  }
}
