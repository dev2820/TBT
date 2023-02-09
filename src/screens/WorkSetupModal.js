import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const WorkSetupModal = () => {
  const confirm = (time) => {
    setup.changeWorkTime(time);
    modal.hideWorkSetupModal();
  };
  const cancel = () => {
    modal.hideWorkSetupModal();
  };
  return (
    <TimePickerModal
      title={"운동 시간"}
      isVisible={modal.isWorkSetupModalVisible}
      confirm={confirm}
      cancel={cancel}
      value={setup[PHASE.BREAK.NAME].value}
    ></TimePickerModal>
  );
};

export default observer(WorkSetupModal);
