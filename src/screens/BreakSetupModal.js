import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const BreakSetupModal = () => {
  const confirm = (time) => {
    setup.changeBreakTime(time);
    modal.hideBreakSetupModal();
  };
  const cancel = () => {
    modal.hideBreakSetupModal();
  };
  return (
    <TimePickerModal
      title={"휴식 시간"}
      isVisible={modal.isBreakSetupModalVisible}
      onBackdropPress={cancel}
      confirm={confirm}
      cancel={cancel}
      value={setup[PHASE.BREAK.NAME].value}
    ></TimePickerModal>
  );
};

export default observer(BreakSetupModal);
