import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import WheelPicker from "react-native-wheely";
import { CenterModal, Confirm } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import globalStyle from "@assets/globalStyle";
import PHASE from "@constants/PHASE";
import TIME from "@constants/TIME";

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
          <WheelPicker
            selectedIndex={currentMin}
            containerStyle={styles.picker}
            options={TIME.MIN}
            onChange={(min) => changeCurrentMin(min)}
          ></WheelPicker>
          <Text style={{ textAlignVertical: "center" }}>:</Text>
          <WheelPicker
            selectedIndex={currentSec}
            containerStyle={styles.picker}
            options={TIME.SEC}
            onChange={(sec) => changeCurrentSec(sec)}
          ></WheelPicker>
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
