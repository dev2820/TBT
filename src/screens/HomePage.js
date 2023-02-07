import { View, StyleSheet, Button, FlatList } from "react-native";
import { Page } from "@components/views";
import SettingCard from "@components/SettingCard";
import Title from "@components/Title";
import THEME from "@constants/THEME";
import SETTING from "@constants/SETTING";
const settings = [
  {
    name: "준비",
    theme: THEME.READY,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "운동",
    theme: THEME.WORK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "휴식",
    theme: THEME.BREAK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "반복",
    theme: THEME.REPS,
    type: SETTING.TYPE.REPS,
    value: 3,
  },
];

export default HomePage = ({ navigation }) => {
  return (
    <Page style={{ alignItems: "center" }}>
      <Title>🔥 TBT 🔥</Title>
      <View style={styles.settingsContainer}>
        <FlatList
          data={settings}
          style={styles.grid}
          renderItem={({ item }) => <SettingCard settingInfo={item} />}
          numColumns={2}
        />
      </View>
      <Button
        title="start"
        style={[styles.startButton]}
        theme={THEME.PRIMARY}
        onPress={() => navigation.navigate("Timer")}
      ></Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 24,
  },
  settingsContainer: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 60,
  },
  grid: {
    padding: 10,
  },
  startButton: {
    width: 160,
    height: 160,
    elevation: 6,
    alignItems: "center",
  },
});
