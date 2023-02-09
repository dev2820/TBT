import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import TimePicker from "@components/TimePicker";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import createDebounce from "@utils/createDebounce";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const ReadySetupModal = () => {
  const [currentTime, setCurrentTime] = useState(setup[PHASE.READY.NAME].value);
  const debouncedTimerSetter = createDebounce(setCurrentTime);
  const confirm = () => {
    setup.changeReadyTime(currentTime);
    modal.hideReadySetupModal();
  };
  const cancel = () => {
    modal.hideReadySetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isReadySetupModalVisible}
      onBackdropPress={cancel}
    >
      <Confirm onConfirm={confirm} onCancel={cancel}>
        <Text style={[globalStyle.HEADING_SMALL, styles.title]}>준비 시간</Text>
        <TimePicker
          style={styles.picker}
          timeSelected={currentTime}
          onChange={debouncedTimerSetter}
        ></TimePicker>
      </Confirm>
    </CenterModal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "700",
  },
  picker: {
    justifyContent: "center",
  },
});

export default observer(ReadySetupModal);
