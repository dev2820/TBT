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
  pause() {
    this._setState(STATE.STOP);
    this._clear();
  },
  resume() {
    this.run();
  },
  _run() {
    this._setState(STATE.RUN);
    this._setTimer(
      setInterval(() => {
        this._setTime(this.time - 1);
        if (this.time === 0) {
          this._setTimer(null);
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
  _clear() {
    this.setTimer(null);
  },
});

const useTimerStore = () => {
  return timerStore;
};

export { useTimerStore };
