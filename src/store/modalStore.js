import { observable } from "mobx";

const state = {
  isTimeModalVisible: false,
};
const actions = {
  showTimeModal() {
    this.isTimeModalVisible = true;
  },
  hideTimeModal() {
    this.isTimeModalVisible = false;
  },
};
const modalStore = observable({
  ...state,
  ...actions,
});

const useModalStore = () => {
  return modalStore;
};

export { useModalStore };
