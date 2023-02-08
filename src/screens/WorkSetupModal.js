import React, { useState } from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import PHASE from "@constants/PHASE";

const modal = useModalStore();
const setup = useSetupStore();

const WorkSetupModal = () => {
  const [currentNum, changeCurrentNum] = useState(setup[PHASE.WORK.NAME].value);
  const confirm = () => {
    setup.changeWorkTime(currentNum);
    modal.hideWorkSetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isWorkSetupModalVisible}
      onBackdropPress={() => modal.hideWorkSetupModal()}
    >
      <Confirm onConfirm={confirm}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>운동 시간</Text>
        <TextInput
          style={{ height: 60 }}
          onChangeText={changeCurrentNum}
          value={currentNum}
          defaultValue={currentNum.toString()}
          keyboardType="numeric"
        ></TextInput>
      </Confirm>
    </CenterModal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default observer(WorkSetupModal);
