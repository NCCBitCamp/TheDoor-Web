const sharedTimer = {
    timeLeft: 6,
    intervalId: null,
  
    startTimer() {
      this.intervalId = setInterval(() => {
        this.timeLeft--;
        this.updateTimeDisplay();
        this.logTimeRemaining();
  
        if (this.timeLeft === 0) {
          this.stopTimer();
          this.showTimeOverAlert();
        }
      }, 1000);
    },
  
    stopTimer() {
      clearInterval(this.intervalId);
    },
  
    updateTimeDisplay() {
      const timeLeftDisplay = document.querySelector('.time-left');
      timeLeftDisplay.textContent = `Time left: ${this.timeLeft} seconds`;
    },
  
    logTimeRemaining() {
      console.log(`Time remaining: ${this.timeLeft} seconds`);
    },
  
    showTimeOverAlert() {
      alert("Time Over ...");
    }
  };
  
  console.log("Starting timer...");
  sharedTimer.startTimer();

  

// 공유타이머 실패했어요 ^_^..
// // shared_timer.js
// export let sharedTimer = {
//     timeLeft: 0,
//     intervalId: null,
  
//     startTimer(initialTimeLeft) {
//       this.timeLeft = initialTimeLeft;
//       this.intervalId = setInterval(() => {
//         this.timeLeft--;
//         this.updateTimeDisplay();
//         if (this.timeLeft === 0) {
//           this.stopTimer();
//         }
//       }, 1000);
//     },
  
//     stopTimer() {
//       clearInterval(this.intervalId);
//     },
  
//     updateTimeDisplay() {
//       const timeLeftElements = document.querySelectorAll('.time-left');
//       timeLeftElements.forEach((element) => {
//         element.textContent = this.timeLeft;
//       });
//     },
//   };
  
//   export default sharedTimer;
  