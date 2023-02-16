import { Text, StyleSheet } from "react-native";
import Card from "@components/views/Card";
import globalStyle from "@assets/globalStyle";

const ThemeButton = ({ title, onPress, theme, style, textStyle }) => {
  const themeStyle = {
    backgroundColor: theme,
  };
  return (
    <Card style={[styles.button, themeStyle, style]} onPress={onPress}>
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
    marginBottom: 16,
  },
});

export default ThemeButton;
