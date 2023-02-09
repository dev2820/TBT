import { observable } from "mobx";
import STATE from "@constants/STATE";

const timerStore = observable({
  time: 0,
  timer: null,
  state: STATE.STOP,
  setTime(time) {
    this._setTime(time);
  },
  run() {
    this._run();
  },
  clear() {
    this._setTimer(null);
  },
  pause() {
    this._setState(STATE.STOP);
    this.clear();
  },
  resume() {
    this.run();
  },
  _run() {
    this._setState(STATE.RUN);
    this._setTimer(
      setInterval(() => {
        this.setTime(this.time - 1);
        if (this.time === 0) {
          this.clear();
          this._setState(STATE.FINISH);
        }
      }, 1000)
    );
  },
  _setTime(time) {
    this.time = time;
  },
  _setTimer(newTimer) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = newTimer;
  },
  _setState(state) {
    this.state = state;
  },
});

const useTimerStore = () => {
  return timerStore;
};

export { useTimerStore };
