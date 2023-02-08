import { observable } from "mobx";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";

const phaseStore = observable({
  phases: [],
  cursor: 0,
  init(setup) {
    /**
     * setup을 기반으로 phases를 구성한다.
     */
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
  get currentPhase() {
    /**
     * 현재 수행중인 phase의 정보를 반환한다.
     */
  },
  nextPhase() {
    /**
     * 다음 페이즈로 이동한다.
     */
  },
  get isFinished() {
    /**
     * 모든 페이즈를 완료 했다면 true를 반환한다.
     */
  },
});

const usePhaseStore = () => {
  return phaseStore;
};

export { usePhaseStore };
