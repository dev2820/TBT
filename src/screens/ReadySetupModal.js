import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import PHASE from "@constants/PHASE";
import WheelPicker from "react-native-wheely";

const modal = useModalStore();
const setup = useSetupStore();

const ReadySetupModal = () => {
  const [currentMin, changeCurrentMin] = useState(
    Math.floor(setup[PHASE.READY.NAME].value / 60)
  );
  const [currentSec, changeCurrentSec] = useState(
    setup[PHASE.READY.NAME].value % 60
  );
  const confirm = () => {
    setup.changeReadyTime(currentMin * 60 + currentSec);
    modal.hideReadySetupModal();
  };
  return (
    <CenterModal
      isVisible={modal.isReadySetupModalVisible}
      onBackdropPress={() => modal.hideReadySetupModal()}
    >
      <Confirm onConfirm={confirm}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>준비 시간</Text>
        <View style={styles.pickers}>
          <View style={styles.picker}>
            <WheelPicker
              selectedIndex={currentMin}
              options={[0, 1, 2, 3, 4, 5]}
              onChange={(min) => changeCurrentMin(min)}
            ></WheelPicker>
          </View>
          <Text style={{ textAlignVertical: "center" }}>:</Text>
          <View style={styles.picker}>
            <WheelPicker
              selectedIndex={currentSec}
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onChange={(sec) => changeCurrentSec(sec)}
            ></WheelPicker>
          </View>
        </View>
      </Confirm>
    </CenterModal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  pickers: {
    flexDirection: "row",
    justifyContent: "center",
  },
  picker: {
    width: 60,
    marginHorizontal: 10,
  },
});

export default observer(ReadySetupModal);
