import { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";

const NumberPicker = ({ initNum, max = 0, min = 0, step, onChange }) => {
  const [num, setNum] = useState(initNum);
  const [isIncreaseDisable, setIncreaseDisable] = useState(num + step > max);
  const [isDecreaseDisable, setDecreaseDisable] = useState(num + step < min);
  const increase = () => {
    setNum(num + step);
    setIncreaseDisable(num + step > max);
    onChange(num);
  };
  const decrease = () => {
    setNum(num - step);
    setDecreaseDisable(num - step > min);
    onChange(num);
  };

  return (
    <View>
      <TouchableHighlight onPress={increase} disabled={isIncreaseDisable}>
        <Text>+</Text>
      </TouchableHighlight>
      <Text>{num}</Text>
      <TouchableHighlight onPress={decrease} disabled={isDecreaseDisable}>
        <Text>-</Text>
      </TouchableHighlight>
    </View>
  );
};

export default NumberPicker;
