import { observable } from "mobx";

/**
 * modalStore는 모달이 보여지고 숨겨지는 로직을 관장한다.
 */

const modalStore = observable({
  isTimeModalVisible: false,
  showTimeModal() {
    this.isTimeModalVisible = true;
  },
  hideTimeModal() {
    this.isTimeModalVisible = false;
  },
});

const useModalStore = () => {
  return modalStore;
};

export { useModalStore };
