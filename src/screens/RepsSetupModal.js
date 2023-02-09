import React from "react";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import REPS from "@constants/REPS";
import NumberPickerModal from "@components/NumberPickerModal";

const modal = useModalStore();
const setup = useSetupStore();

const confirm = (num) => {
  setup.changeReps(num);
  modal.hideRepsSetupModal();
};
const cancel = () => {
  modal.hideRepsSetupModal();
};

const RepsSetupModal = () => {
  return (
    <NumberPickerModal
      title={"반복 횟수"}
      isVisible={modal.isRepsSetupModalVisible}
      confirm={confirm}
      cancel={cancel}
      isRotatable={true}
      value={setup[REPS.NAME].value}
    ></NumberPickerModal>
  );
};

export default observer(RepsSetupModal);
