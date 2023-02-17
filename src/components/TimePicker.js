import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NumberPicker } from "@components/views";

const TimePicker = ({ style, timeSelected, onChange }) => {
  const [currentMin, changeCurrentMin] = useState(
    Math.floor(timeSelected / 60)
  );
  const [currentSec, changeCurrentSec] = useState(timeSelected % 60);
  const timeChange = (min, sec) => {
    changeCurrentMin(min);
    changeCurrentSec(sec);
    onChange(min * 60 + sec);
  };
  useEffect(() => {
    changeCurrentMin(Math.floor(timeSelected / 60));
    changeCurrentSec(timeSelected % 60);
  }, [timeSelected]);

  return (
    <View style={[styles.pickers, style]}>
      <NumberPicker
        initNum={currentMin}
        max={99}
        min={0}
        step={1}
        isRotatable={true}
        onChange={(min) => timeChange(min, currentSec)}
      ></NumberPicker>
      <Text style={styles.colon}>:</Text>
      <NumberPicker
        initNum={currentSec}
        max={59}
        min={0}
        step={1}
        isRotatable={true}
        onChange={(sec) => timeChange(currentMin, sec)}
      ></NumberPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickers: {
    flexDirection: "row",
  },
  picker: {
    width: 80,
    marginHorizontal: 10,
  },
  colon: {
    textAlignVertical: "center",
  },
});

export default TimePicker;
