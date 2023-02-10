import { View, StyleSheet } from "react-native";

const Divider = ({ color }) => {
  const colorStyle = { borderBottomColor: color };

  return <View style={[styles.line, colorStyle]}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Divider;
