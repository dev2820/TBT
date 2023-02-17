import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const confirm = (time) => {
  setup.changeBreakTime(time);
  modal.hideModal();
};
const cancel = () => {
  modal.hideModal();
};

const BreakSetupModal = () => {
  return (
    <TimePickerModal
      title={"휴식 시간"}
      isVisible={modal.isModalVisible}
      confirm={confirm}
      cancel={cancel}
      value={setup[PHASE.BREAK.NAME].value}
    ></TimePickerModal>
  );
};

export default observer(BreakSetupModal);
