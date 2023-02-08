import { StyleSheet, Text } from "react-native";
import { Card, Label } from "@components/views";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import SETTING from "@constants/SETTING";

const format = ({ value, type }) => {
  if (type === SETTING.TYPE.TIME) return formatTime(value);

  return value;
};

const SettingCard = ({ setting, onPress }) => {
  const theme = { backgroundColor: setting.theme };

  return (
    <Card style={[styles.container, theme]} onPress={onPress}>
      <Label style={styles.label}>{setting.name}</Label>
      <Text style={[styles.value, globalStyle.DISPLAY_SMALL]}>
        {format(setting)}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: 160,
    height: 160,
    alignItems: "center",
  },
  firstOfLine: {
    alignItems: "flex-end",
  },
  lastOfLine: {
    alignItems: "flex-start",
  },
  value: {
    flexGrow: 1,
    textAlignVertical: "center",
    textAlign: "center",
  },
  label: {
    position: "absolute",
    left: 16,
    top: 16,
  },
});

export default SettingCard;
