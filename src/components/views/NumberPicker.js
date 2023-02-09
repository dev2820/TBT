import { useEffect, useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";

const NumberPicker = ({
  initNum,
  max = 0,
  min = 0,
  step,
  onChange,
  isRotatable,
}) => {
  const [num, setNum] = useState(initNum);
  const [isIncreaseDisable, setIncreaseDisable] = useState(
    !isRotatable && num + step > max
  );
  const [isDecreaseDisable, setDecreaseDisable] = useState(
    !isRotatable && num - step < min
  );
  const increase = () => {
    console.log(num + step, max);
    if (isRotatable && num + step > max) {
      setNum(num + step - max + min - 1);
      return;
    }
    setNum(num + step);
  };
  const decrease = () => {
    if (isRotatable && num - step < min) {
      setNum(num - step - min + max + 1);
      return;
    }
    setNum(num - step);
  };
  useEffect(() => {
    if (!isRotatable) {
      setIncreaseDisable(num + step > max);
      setDecreaseDisable(num - step < min);
    }

    onChange(num);
  }, [num]);

  return (
    <View>
      <TouchableHighlight
        style={styles.button}
        onPress={increase}
        disabled={isIncreaseDisable}
      >
        <Text
          style={[globalStyle.LABEL_LARGE, isIncreaseDisable && styles.disable]}
        >
          +
        </Text>
      </TouchableHighlight>
      <Text style={[styles.number, globalStyle.HEADING_LARGE]}>{num}</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={decrease}
        disabled={isDecreaseDisable}
      >
        <Text
          style={[globalStyle.LABEL_LARGE, isDecreaseDisable && styles.disable]}
        >
          -
        </Text>
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
  disable: {
    opacity: 0.5,
  },
});
export default NumberPicker;
