import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import TimePicker from "@components/TimePicker";
import globalStyle from "@assets/globalStyle";

const TimePickerModal = ({ title, isVisible, confirm, cancel, value }) => {
  const [currentTime, changeCurrentTime] = useState(value);
  useEffect(() => {
    changeCurrentTime(value);
  }, [value]);
  return (
    <CenterModal
      isVisible={isVisible}
      onBackdropPress={() => {
        changeCurrentTime(value);
        cancel();
      }}
    >
      <Confirm
        onConfirm={() => {
          confirm(currentTime);
        }}
        onCancel={() => {
          changeCurrentTime(value);
          cancel();
        }}
      >
        <Text style={[globalStyle.HEADING_SMALL, styles.title]}>{title}</Text>
        <TimePicker
          style={styles.picker}
          timeSelected={currentTime}
          onChange={changeCurrentTime}
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
    alignItems: "center",
    marginTop: 40,
  },
});

export default TimePickerModal;
