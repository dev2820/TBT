import { observable } from "mobx";

/**
 * modalStore는 모달이 보여지고 숨겨지는 로직을 관장한다.
 */
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
