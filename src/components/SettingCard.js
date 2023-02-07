import { StyleSheet, View, Text } from "react-native";
import { Card } from "@components/views";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import SETTING from "@constants/SETTING";

const format = ({ value, type }) => {
  if (type === SETTING.TYPE.TIME) return formatTime(value);

  return value;
};
const SettingCard = ({ settingInfo }) => {
  return (
    <View style={[styles.container]}>
      <Card style={styles.card}>
        <Text>{settingInfo.name}</Text>
        <Text style={globalStyle.HEADING_LARGE}>{format(settingInfo)}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  firstOfLine: {
    alignItems: "flex-end",
  },
  lastOfLine: {
    alignItems: "flex-start",
  },
  card: {
    width: 160,
    height: 160,
  },
});

export default SettingCard;
