import { Text, StyleSheet } from "react-native";
import Card from "@components/views/Card";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const PrimaryButton = ({ title, onPress, style, textStyle }) => {
  return (
    <Card style={[styles.button, style]} onPress={onPress}>
      <Text style={[globalStyle.ON_PRIMARY, textStyle]}>{title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
    marginBottom: 16,
  },
});

export default PrimaryButton;
