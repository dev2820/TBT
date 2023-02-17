import { observable, computed } from "mobx";
import THEME from "@constants/THEME";
import SETTING from "@constants/SETTING";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";
import storage from "@modules/storage";

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
    async init() {
      const initialReadyTime =
        (await storage.read(PHASE.READY.NAME)) ?? PHASE.READY.INIT_VALUE;
      this.changeReadyTime(initialReadyTime);
      const initialWorkTime =
        (await storage.read(PHASE.WORK.NAME)) ?? PHASE.WORK.INIT_VALUE;
      this.changeWorkTime(initialWorkTime);
      const initialBreakTime =
        (await storage.read(PHASE.BREAK.NAME)) ?? PHASE.BREAK.INIT_VALUE;
      this.changeBreakTime(initialBreakTime);
      const initialReps = (await storage.read(REPS.NAME)) ?? REPS.INIT_VALUE;
      this.changeReps(initialReps);
    },
    get settings() {
      return [
        this[PHASE.READY.NAME],
        this[PHASE.WORK.NAME],
        this[PHASE.BREAK.NAME],
        this[REPS.NAME],
      ];
    },
    currentSetupKey: PHASE.READY.NAME,
    setCurrentSetup(key) {
      this.currentSetupKey = key;
    },
    get currentSetup() {
      return this[this.currentSetupKey];
    },
    changeCurrentSetupValue(value) {
      this[this.currentSetupKey] = {
        ...this[this.currentSetupKey],
        value: value,
      };
    },
    changeReadyTime(time) {
      this[PHASE.READY.NAME] = {
        ...this[PHASE.READY.NAME],
        value: time,
      };
      storage.store(PHASE.READY.NAME, time);
    },
    changeWorkTime(time) {
      this[PHASE.WORK.NAME] = {
        ...this[PHASE.WORK.NAME],
        value: time,
      };
      storage.store(PHASE.WORK.NAME, time);
    },
    changeBreakTime(time) {
      this[PHASE.BREAK.NAME] = {
        ...this[PHASE.BREAK.NAME],
        value: time,
      };
      storage.store(PHASE.BREAK.NAME, time);
    },
    changeReps(reps) {
      this[REPS.NAME] = {
        ...this[REPS.NAME],
        value: reps,
      };
      storage.store(REPS.NAME, reps);
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
