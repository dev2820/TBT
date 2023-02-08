import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";
import { View, Pressable, Text, StyleSheet } from "react-native";

const Confirm = ({ children, onConfirm }) => {
  const CONFIRM = "확인";
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Pressable style={styles.confirm} onPress={onConfirm}>
        <Text style={[globalStyle.TITLE_LARGE, styles.confirmText]}>
          {CONFIRM}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  confirm: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: THEME.PLACEHOLDER,
  },
  confirmText: {
    color: THEME.PRIMARY,
  },
});

export default Confirm;
