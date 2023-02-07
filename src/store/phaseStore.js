import { observable } from "mobx";

const phaseStore = observable({
  num: 0,
  increase(num) {
    this.num = this.num + num;
  },
});

const usePhaseStore = () => {
  return phaseStore;
};

export { usePhaseStore };
