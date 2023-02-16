import { StyleSheet } from "react-native";
import Card from "@components/views/Card";

const ThemeButton = ({ children, onPress, theme, style }) => {
  const themeStyle = {
    backgroundColor: theme,
  };
  return (
    <Card style={[styles.button, themeStyle, style]} onPress={onPress}>
      {children}
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
