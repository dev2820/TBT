import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FlatButton, CenterModal } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";

const modal = useModalStore();
const setup = useSetupStore();

const ReadySetupModal = () => {
  const [currentNum, setCurrentNum] = useState(3);
  const confirm = () => {
    setup.changeReadyTime(currentNum);
    modal.hideTimeModal();
  };
  return (
    <CenterModal
      isVisible={modal.isTimeModalVisible}
      onBackdropPress={() => modal.hideTimeModal()}
    >
      <View>
        <Text style={styles.text}>Hi {currentNum}</Text>
        <TextInput
          type="numberic"
          onChangeText={(text) => setCurrentNum(parseInt(text), 10)}
        ></TextInput>
        <FlatButton onPress={confirm}>
          <Text>확인</Text>
        </FlatButton>
      </View>
    </CenterModal>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
});

export default observer(ReadySetupModal);
