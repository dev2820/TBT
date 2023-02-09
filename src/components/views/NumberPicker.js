import { useEffect, useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";
import easeInRunner from "@utils/easeInRunner";

let stopContinue = null;

const NumberPicker = ({
  initNum,
  max = 0,
  min = 0,
  step,
  onChange,
  isRotatable,
  style,
}) => {
  const [num, setNum] = useState(initNum);
  const [isIncreaseDisable, setIncreaseDisable] = useState(
    !isRotatable && num + step > max
  );
  const [isDecreaseDisable, setDecreaseDisable] = useState(
    !isRotatable && num - step < min
  );
  const increase = () => {
    setNum((prevNum) => {
      if (isRotatable && prevNum + step > max) {
        return prevNum + step - max + min - 1;
      }
      return prevNum + step;
    });
  };
  const continuousIncrease = () => {
    stopContinue = easeInRunner(increase, 250);
  };
  const stopContinueRunner = () => {
    if (!stopContinue) return;
    stopContinue();
    stopContinue = null;
  };
  const decrease = () => {
    setNum((prevNum) => {
      if (isRotatable && prevNum - step < min) {
        return prevNum - step - min + max + 1;
      }
      return prevNum - step;
    });
  };
  const continuousDecrease = () => {
    stopContinue = easeInRunner(decrease, 250);
  };
  useEffect(() => {
    if (!isRotatable) {
      setIncreaseDisable(num + step > max);
      setDecreaseDisable(num - step < min);
    }
    onChange(num);
  }, [num]);

  return (
    <View style={style}>
      <TouchableHighlight
        style={styles.button}
        onPress={increase}
        delayLongPress={300}
        onLongPress={continuousIncrease}
        onPressOut={stopContinueRunner}
        disabled={isIncreaseDisable}
        underlayColor={THEME.PLACEHOLDER_DARKER}
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
        delayLongPress={500}
        onLongPress={continuousDecrease}
        onPressOut={stopContinueRunner}
        disabled={isDecreaseDisable}
        underlayColor={THEME.PLACEHOLDER_DARKER}
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
