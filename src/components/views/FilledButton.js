import { StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";
const FilledButton = ({ style, title, onPress, theme, textTheme }) => {
  const themeStyle = { backgroundColor: theme || THEME.PRIMARY };
  const textStyle = { color: textTheme || THEME.ON_PRIMARY };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="#dddddd"
      style={[styles.container, themeStyle, style]}
    >
      <Text style={[styles.title, globalStyle.TITLE_LARGE, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
  },
  title: {
    textAlign: "center",
  },
});

export default FilledButton;
