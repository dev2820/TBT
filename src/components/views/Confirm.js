import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

const Confirm = ({ style, children, onConfirm, onCancel }) => {
  const CONFIRM = "확인";
  const CAHCEL = "취소";
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>{children}</View>
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          onPress={onCancel}
          activeOpacity={0.6}
          underlayColor="#dddddd"
        >
          <Text style={[globalStyle.LABEL_LARGE, styles.cancelText]}>
            {CAHCEL}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={onConfirm}
          activeOpacity={0.6}
          underlayColor="#dddddd"
        >
          <Text style={[globalStyle.LABEL_LARGE, styles.confirmText]}>
            {CONFIRM}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  content: {
    flexGrow: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    width: "50%",
    borderRadius: 16,
    marginBottom: 16,
  },
  confirmText: {
    color: THEME.PRIMARY,
    fontWeight: "500",
  },
  cancelText: {
    color: THEME.PLACEHOLDER,
    fontWeight: "500",
  },
});

export default Confirm;
