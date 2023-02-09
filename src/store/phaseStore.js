import { observable, observe } from "mobx";
import { useTimerStore } from "@store/timerStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";
import STATE from "@constants/STATE";

const timer = useTimerStore();
const setup = useSetupStore();

observe(timer, "state", ({ newValue }) => {
  if (newValue !== STATE.FINISH) return;
  phaseStore.next();
});

const phaseStore = observable({
  phases: [],
  cursor: 0,
  state: STATE.FINISH,
  init() {
    const newPhases = [];
    const readyPhase = setup[PHASE.READY.NAME];
    const workPhase = setup[PHASE.WORK.NAME];
    const breakPhase = setup[PHASE.BREAK.NAME];
    const reps = setup[REPS.NAME].value;
    const isLastPhase = (phaseIndex) => phaseIndex === reps - 1;

    newPhases.push(readyPhase);
    for (let i = 0; i < reps; i++) {
      newPhases.push(workPhase);
      if (isLastPhase(i)) break;
      newPhases.push(breakPhase);
    }
    this.cursor = 0;
    this.phases = newPhases;
  },
  _setState(state) {
    this.state = state;
  },
  run() {
    if (!this.currentPhase) return;

    this._setState(STATE.RUN);
    timer.setTime(this.currentPhase.value);
    timer.run();
  },
  pause() {
    this._setState(STATE.STOP);
    timer.pause();
  },
  resume() {
    this._setState(STATE.RUN);
    timer.resume();
  },
  _next() {
    this.cursor++;
    if (this.cursor >= this.phases.length) {
      this.setState(STATE.FINISH);
      return;
    }

    this.run();
  },
  next() {
    this._next();
  },
  get currentPhase() {
    if (this.cursor >= this.phases.length) return null;
    return this.phases[this.cursor];
  },
  get currentRep() {
    return Math.ceil(this.cursor / 2);
  },
  get allRep() {
    return setup[REPS.NAME].value;
  },
  get isFinished() {
    return this.state === STATE.FINISH;
  },
  get isStopped() {
    return this.state === STATE.STOP;
  },
  get isRun() {
    return this.state === STATE.RUN;
  },
});

const usePhaseStore = () => {
  return phaseStore;
};

export { usePhaseStore };
