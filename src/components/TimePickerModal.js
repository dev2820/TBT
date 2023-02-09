import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { CenterModal, Confirm } from "@components/views";
import TimePicker from "@components/TimePicker";
import globalStyle from "@assets/globalStyle";
import createDebounce from "@utils/createDebounce";

const TimePickerModal = ({
  title,
  isVisible,
  onBackdropPress,
  confirm,
  cancel,
  value,
}) => {
  const [currentTime, changeCurrentTime] = useState(value);
  const debouncedTimerSetter = createDebounce(changeCurrentTime);

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

export default TimePickerModal;
