import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import TimePicker from "@components/TimePicker";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const ReadySetupModal = () => {
  const [currentTime, setCurrentTime] = useState(setup[PHASE.READY.NAME].value);

  const confirm = () => {
    setup.changeReadyTime(currentTime);
    modal.hideReadySetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isReadySetupModalVisible}
      onBackdropPress={() => modal.hideReadySetupModal()}
    >
      <Confirm onConfirm={confirm}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>준비 시간</Text>
        <TimePicker
          style={styles.picker}
          timeSelected={currentTime}
          onChange={setCurrentTime}
        ></TimePicker>
      </Confirm>
    </CenterModal>
  );
};

const styles = StyleSheet.create({
  picker: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});

export default observer(ReadySetupModal);
