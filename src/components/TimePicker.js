import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import WheelPicker from "react-native-wheely";
import TIME from "@constants/TIME";
import globalStyle from "@assets/globalStyle";

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
  return (
    <View style={[styles.pickers, style]}>
      <WheelPicker
        scaleFunction={(x) => Math.pow(3 / 4, x)}
        itemTextStyle={globalStyle.HEADING_LARGE}
        itemHeight={50}
        selectedIndex={currentMin}
        containerStyle={styles.picker}
        options={TIME.MIN}
        onChange={(min) => timeChange(min, currentSec)}
      ></WheelPicker>
      <Text style={styles.colon}>:</Text>
      <WheelPicker
        scaleFunction={(x) => Math.pow(3 / 4, x)}
        itemTextStyle={globalStyle.HEADING_LARGE}
        itemHeight={50}
        selectedIndex={currentSec}
        containerStyle={styles.picker}
        options={TIME.SEC}
        onChange={(sec) => timeChange(currentMin, sec)}
      ></WheelPicker>
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
