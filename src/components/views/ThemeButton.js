import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "@assets/styles/Theme";

const ThemeButton = ({ onPress, style, theme, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style, Theme[theme], styles.container]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});

export default ThemeButton;
