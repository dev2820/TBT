import { StyleSheet, Text, Dimensions } from "react-native";
import { Card, Label } from "@components/views";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import SETTING from "@constants/SETTING";
import { useState } from "react";

const format = ({ value, type }) => {
  if (type === SETTING.TYPE.TIME) return formatTime(value);

  return value;
};

const SettingCard = ({ setting, onPress }) => {
  const [cardSize, setCardSize] = useState(160);
  Dimensions.addEventListener("change", (e) => {
    setCardSize(Math.floor(Math.min((e.window.height / 2) * 0.5, 160)));
  });
  const theme = { backgroundColor: setting.theme };
  const cardSizeStyle = {
    width: cardSize,
    height: cardSize,
  };
  return (
    <Card style={[styles.container, cardSizeStyle, theme]} onPress={onPress}>
      {cardSize > 120 && <Label style={styles.label}>{setting.name}</Label>}
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
    alignItems: "center",
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
