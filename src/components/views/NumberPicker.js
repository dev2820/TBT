import { useEffect, useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";
import easeInRunner from "@utils/easeInRunner";
import createCalcRotate from "@utils/createCalcRotate";

let stopContinue = null;
const NumberPicker = ({ initNum, max = 0, min = 0, step, onChange, style }) => {
  const calcRotate = createCalcRotate(min, max);
  const [num, setNum] = useState(initNum);
  const increase = () => {
    setNum((prevNum) => calcRotate(prevNum, step));
  };
  const continuousIncrease = () => {
    stopContinue = easeInRunner(increase, 200);
  };
  const stopContinueRunner = () => {
    if (!stopContinue) return;
    stopContinue();
    stopContinue = null;
  };
  const decrease = () => {
    setNum((prevNum) => calcRotate(prevNum, -step));
  };
  const continuousDecrease = () => {
    stopContinue = easeInRunner(decrease, 200);
  };
  useEffect(() => {
    onChange(num);
  }, [num]);
  useEffect(() => {
    setNum(initNum);
  }, [initNum]);

  return (
    <View style={style}>
      <TouchableHighlight
        style={styles.button}
        onPress={increase}
        delayLongPress={300}
        onLongPress={continuousIncrease}
        onPressOut={stopContinueRunner}
        underlayColor={THEME.PLACEHOLDER_DARKER}
      >
        <Text style={globalStyle.LABEL_LARGE}>+</Text>
      </TouchableHighlight>
      <Text style={[styles.number, globalStyle.HEADING_LARGE]}>{num}</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={decrease}
        delayLongPress={400}
        onLongPress={continuousDecrease}
        onPressOut={stopContinueRunner}
        underlayColor={THEME.PLACEHOLDER_DARKER}
      >
        <Text style={globalStyle.LABEL_LARGE}>-</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 40,
    backgroundColor: THEME.PLACEHOLDER,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    textAlign: "center",
    marginVertical: 24,
  },
});
export default NumberPicker;
