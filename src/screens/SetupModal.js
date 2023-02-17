import React from "react";
import TimePickerModal from "@components/TimePickerModal";
import NumberPickerModal from "@components/NumberPickerModal";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import SETTING from "@constants/SETTING";

const modal = useModalStore();
const setup = useSetupStore();

const confirm = (time) => {
  setup.changeCurrentSetupValue(time);
  modal.hideModal();
};
const cancel = () => {
  modal.hideModal();
};

const SetupModal = () => {
  if (setup.currentSetup.type === SETTING.TYPE.TIME) {
    return TimePicker();
  }

  return NumberPicker();
};

const TimePicker = () => {
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

const NumberPicker = () => {
  return (
    <NumberPickerModal
      title={"반복 횟수"}
      isVisible={modal.isModalVisible}
      confirm={confirm}
      cancel={cancel}
      isRotatable={true}
      value={setup.currentSetup.value}
    ></NumberPickerModal>
  );
};

export default observer(SetupModal);
