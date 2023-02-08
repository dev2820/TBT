import { observable } from "mobx";

/**
 * modalStore는 모달이 보여지고 숨겨지는 로직을 관장한다.
 */

const modalStore = observable({
  isReadySetupModalVisible: false,
  showReadySetupModal() {
    this.isReadySetupModalVisible = true;
  },
  hideReadySetupModal() {
    this.isReadySetupModalVisible = false;
  },

  isBreakSetupModalVisible: false,
  showBreakSetupModal() {
    this.isBreakSetupModalVisible = true;
  },
  hideBreakSetupModal() {
    this.isBreakSetupModalVisible = false;
  },

  isWorkSetupModalVisible: false,
  showWorkSetupModal() {
    this.isWorkSetupModalVisible = true;
  },
  hideWorkSetupModal() {
    this.isWorkSetupModalVisible = false;
  },
});

const useModalStore = () => {
  return modalStore;
};

export { useModalStore };
