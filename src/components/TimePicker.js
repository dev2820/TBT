import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NumberPicker } from "@components/views";
import calcMinSec from "@utils/calcMinSec";

const TimePicker = ({ style, timeSelected, onChange }) => {
  const [min, sec] = calcMinSec(timeSelected);
  const [currentMin, changeCurrentMin] = useState(Math.floor(min));
  const [currentSec, changeCurrentSec] = useState(sec);
  const timeChange = (min, sec) => {
    changeCurrentMin(min);
    changeCurrentSec(sec);
    onChange(min * 60 + sec);
  };
  useEffect(() => {
    const [min, sec] = calcMinSec(timeSelected);
    changeCurrentMin(min);
    changeCurrentSec(sec);
  }, [timeSelected]);

  return (
    <View style={[styles.pickers, style]}>
      <NumberPicker
        initNum={currentMin}
        max={99}
        min={0}
        step={1}
        onChange={(min) => timeChange(min, currentSec)}
      ></NumberPicker>
      <Text style={styles.colon}>:</Text>
      <NumberPicker
        initNum={currentSec}
        max={59}
        min={0}
        step={1}
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
