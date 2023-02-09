import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const confirm = (time) => {
  setup.changeReadyTime(time);
  modal.hideReadySetupModal();
};
const cancel = () => {
  modal.hideReadySetupModal();
};

const ReadySetupModal = () => {
  return (
    <TimePickerModal
      title={"준비 시간"}
      isVisible={modal.isReadySetupModalVisible}
      confirm={confirm}
      cancel={cancel}
      value={setup[PHASE.READY.NAME].value}
    ></TimePickerModal>
  );
};

export default observer(ReadySetupModal);
