import React, { useState } from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import REPS from "@constants/REPS";

const modal = useModalStore();
const setup = useSetupStore();

const RepsSetupModal = () => {
  const [currentNum, changeCurrentNum] = useState(setup[REPS.NAME].value);
  const confirm = () => {
    setup.changeReps(currentNum);
    modal.hideRepsSetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isRepsSetupModalVisible}
      onBackdropPress={() => modal.hideRepsSetupModal()}
    >
      <Confirm onConfirm={confirm}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>반복 횟수</Text>
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

export default observer(RepsSetupModal);
