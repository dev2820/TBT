import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";

const modal = useModalStore();
const setup = useSetupStore();

const confirm = (time) => {
  setup.changeCurrentSetupValue(time);
  modal.hideModal();
};
const cancel = () => {
  modal.hideModal();
};

const BreakSetupModal = () => {
  return (
    <TimePickerModal
      title={`${setup.currentSetup.name}`}
      isVisible={modal.isModalVisible}
      confirm={confirm}
      cancel={cancel}
      value={setup.currentSetup.value}
    ></TimePickerModal>
  );
};

export default observer(BreakSetupModal);
