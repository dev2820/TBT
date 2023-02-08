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

const BreakSetupModal = () => {
  const [currentNum, changeCurrentNum] = useState(
    setup[PHASE.BREAK.NAME].value
  );
  const confirm = () => {
    setup.changeBreakTime(currentNum);
    modal.hideBreakSetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isBreakSetupModalVisible}
      onBackdropPress={() => modal.hideBreakSetupModal()}
    >
      <Confirm onConfirm={confirm}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>휴식 시간</Text>
        <TextInput
          style={{ height: 60 }}
          onChangeText={(text) => changeCurrentNum(parseInt(text, 10))}
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

export default observer(BreakSetupModal);
