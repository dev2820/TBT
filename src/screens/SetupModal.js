import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import TimePicker from "@components/TimePicker";
import { CenterModal, Confirm, NumberPicker } from "@components/views";
import { observer } from "mobx-react-lite";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import SETTING from "@constants/SETTING";
import globalStyle from "@assets/globalStyle";

const modal = useModalStore();
const setup = useSetupStore();

const SetupModal = () => {
  const originalValue = setup.currentSetup.value;
  const title = setup.currentSetup.name;
  const pickerType = setup.currentSetup.type;
  const [setupValue, changeSetupValue] = useState(originalValue);
  useEffect(() => {
    if (!modal.isModalVisible) return;
    changeSetupValue(setup.currentSetup.value);
  }, [setup.currentSetup.value, modal.isModalVisible]);

  const confirm = (time) => {
    setup.changeCurrentSetupValue(time);
    modal.hideModal();
  };
  const cancel = () => {
    modal.hideModal();
  };

  return (
    <CenterModal isVisible={modal.isModalVisible} onBackdropPress={cancel}>
      <Confirm
        onConfirm={() => {
          confirm(setupValue);
        }}
        onCancel={cancel}
      >
        <Text style={[globalStyle.HEADING_SMALL, styles.title]}>{title}</Text>
        <Picker
          type={pickerType}
          value={setupValue}
          onChange={changeSetupValue}
        ></Picker>
      </Confirm>
    </CenterModal>
  );
};

const Picker = ({ type, value, onChange }) => {
  if (type === SETTING.TYPE.TIME) return TimePickerView(value, onChange);
  if (type === SETTING.TYPE.NUMBER) return NumberPickerView(value, onChange);
  return "";
};

const TimePickerView = (value, onChange) => {
  return (
    <TimePicker
      style={styles.picker}
      timeSelected={value}
      onChange={(time) => onChange(time)}
    ></TimePicker>
  );
};

const NumberPickerView = (value, onChange) => {
  return (
    <NumberPicker
      style={styles.picker}
      initNum={value}
      max={99}
      min={0}
      step={1}
      isRotatable={true}
      onChange={(num) => onChange(num)}
    ></NumberPicker>
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

export default observer(SetupModal);
