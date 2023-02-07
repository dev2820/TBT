import globalStyle from "@assets/globalStyle";
import { Text, StyleSheet } from "react-native";

const Title = ({ children, style }) => {
  return (
    <Text style={[styles.title, globalStyle.DISPLAY_LARGE, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 24,
  },
});

export default Title;
