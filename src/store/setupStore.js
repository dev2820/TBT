import { observable, computed } from "mobx";
import THEME from "@constants/THEME";
import SETTING from "@constants/SETTING";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";

const setupStore = observable(
  {
    [PHASE.READY.NAME]: {
      name: "준비",
      key: PHASE.READY.NAME,
      theme: THEME.READY,
      type: SETTING.TYPE.TIME,
      value: PHASE.READY.INIT_VALUE,
    },
    [PHASE.WORK.NAME]: {
      name: "운동",
      key: PHASE.WORK.NAME,
      theme: THEME.WORK,
      type: SETTING.TYPE.TIME,
      value: PHASE.WORK.INIT_VALUE,
    },
    [PHASE.BREAK.NAME]: {
      name: "휴식",
      key: PHASE.BREAK.NAME,
      theme: THEME.BREAK,
      type: SETTING.TYPE.TIME,
      value: PHASE.BREAK.INIT_VALUE,
    },
    [REPS.NAME]: {
      name: "반복",
      key: REPS.NAME,
      theme: THEME.REPS,
      type: SETTING.TYPE.NUMBER,
      value: REPS.INIT_VALUE,
    },
    get settings() {
      return [
        this[PHASE.READY.NAME],
        this[PHASE.WORK.NAME],
        this[PHASE.BREAK.NAME],
        this[REPS.NAME],
      ];
    },
    changeReadyTime(time) {
      this[PHASE.READY.NAME] = {
        ...this[PHASE.READY.NAME],
        value: time,
      };
    },
    changeWorkTime(time) {
      this[PHASE.WORK.NAME] = {
        ...this[PHASE.WORK.NAME],
        value: time,
      };
    },
    changeBreakTime(time) {
      this[PHASE.BREAK.NAME] = {
        ...this[PHASE.BREAK.NAME],
        value: time,
      };
    },
    changeReps(time) {
      this[REPS.NAME] = {
        ...this[REPS.NAME],
        value: time,
      };
    },
  },
  {
    settings: computed,
  }
);

const useSetupStore = () => {
  return setupStore;
};

export { useSetupStore };
