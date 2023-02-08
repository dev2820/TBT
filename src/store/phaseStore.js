import { observable } from "mobx";

const phaseStore = observable({
  phases: [],
  cursor: 0,
  init(setup) {
    /**
     * setup을 기반으로 phases를 구성한다.
     */
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
