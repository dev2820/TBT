import { observable } from "mobx";

const STATE = {
  RUN: "run",
  FINISH: "finish",
};

const timerStore = observable({
  time: 0,
  timer: null,
  state: STATE.STOP,
  setTime(time) {
    this.time = time;
  },
  setTimer(newTimer) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = newTimer;
  },
  setState(state) {
    this.state = state;
  },
  run() {
    this.setState(STATE.RUN);
    this.setTimer(
      setInterval(() => {
        this.setTime(this.time - 1);
        if (this.time === 0) {
          this.setTimer(null);
          this.setState(STATE.FINISH);
        }
      }, 1000)
    );
  },
  pause() {
    /**
     * 정지
     */
  },
  resume() {
    /**
     * 재시작
     */
  },
  clear() {
    this.setTimer(null);
  },
});

const useTimerStore = () => {
  return timerStore;
};

export { useTimerStore };
