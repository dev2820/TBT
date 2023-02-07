import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "@assets/styles/Theme";

const ThemeButton = ({ onPress, style, theme, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Theme[theme], styles.container, style]}
    >
      <Text style={[Theme[theme], styles.title]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
});

export default ThemeButton;
