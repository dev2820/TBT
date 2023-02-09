import { observable, observe } from "mobx";
import { useTimerStore } from "@store/timerStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";

const timer = useTimerStore();
const setup = useSetupStore();

observe(timer, "state", ({ newValue }) => {
  if (newValue === "finish") {
    phaseStore.nextPhase();
  }
});

const phaseStore = observable({
  phases: [],
  cursor: 0,
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
  run() {
    if (this.currentPhase) {
      timer.setTime(this.currentPhase.value);
      timer.run();
    }
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
  get currentPhase() {
    if (this.cursor >= this.phases.length) return null;
    return this.phases[this.cursor];
  },
  nextPhase() {
    this.cursor++;
    this.run();
  },
  get isFinished() {
    return this.cursor >= this.phases.length;
  },
  get currentRep() {
    return Math.ceil(this.cursor / 2);
  },
  get allRep() {
    return setup[REPS.NAME].value;
  },
});

const usePhaseStore = () => {
  return phaseStore;
};

export { usePhaseStore };
