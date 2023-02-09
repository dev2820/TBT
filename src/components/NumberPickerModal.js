import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { CenterModal, Confirm, NumberPicker } from "@components/views";
import globalStyle from "@assets/globalStyle";

const NumberPickerModal = ({ title, isVisible, confirm, cancel, value }) => {
  const [currentNumber, changeCurrentNumber] = useState(value);
  return (
    <CenterModal
      isVisible={isVisible}
      onBackdropPress={() => {
        changeCurrentNumber(value);
        cancel();
      }}
    >
      <Confirm
        onConfirm={() => {
          confirm(currentNumber);
        }}
        onCancel={() => {
          changeCurrentNumber(value);
          cancel();
        }}
      >
        <Text style={[globalStyle.HEADING_SMALL, styles.title]}>{title}</Text>
        <NumberPicker
          style={styles.picker}
          initNum={currentNumber}
          max={99}
          min={0}
          step={1}
          isRotatable={true}
          onChange={(num) => changeCurrentNumber(num)}
        ></NumberPicker>
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
    alignItems: "center",
    marginTop: 40,
  },
});

export default NumberPickerModal;
