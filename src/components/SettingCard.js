import { StyleSheet, Text } from "react-native";
import { Label } from "@components/views";
import { observer } from "mobx-react-lite";
import globalStyle from "@assets/globalStyle";
import ThemeButton from "@components/ThemeButton";
import formatTime from "@utils/formatTime";
import SETTING from "@constants/SETTING";
import { useViewportStore } from "@store/viewportStore";

const viewport = useViewportStore();

const format = ({ value, type }) => {
  if (type === SETTING.TYPE.TIME) return formatTime(value);

  return value;
};
const getCardSize = (viewHeight) => {
  if (viewHeight > 500) return 160;
  if (viewHeight > 300) return 80;
  return 50;
};

const SettingCard = ({ setting, onPress }) => {
  const cardSize = getCardSize(viewport.vh);
  const cardSizeStyle = {
    width: cardSize,
    height: cardSize,
  };
  return (
    <ThemeButton
      title="START"
      onPress={onPress}
      theme={setting.theme}
      style={[styles.container, cardSizeStyle]}
    >
      {cardSize > 120 && <Label style={styles.label}>{setting.name}</Label>}
      <Text style={[styles.settingValue, globalStyle.DISPLAY_SMALL]}>
        {format(setting)}
      </Text>
    </ThemeButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  settingValue: {
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

export default observer(SettingCard);
