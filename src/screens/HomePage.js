import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Page, Card } from "@components/views";
import Title from "@components/Title";
import Setting from "@components/Setting";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import THEME from "@constants/THEME";
const settings = [
  {
    name: "준비",
    theme: THEME.READY,
    type: "time",
    value: 180,
  },
  {
    name: "운동",
    theme: THEME.WORK,
    type: "time",
    value: 180,
  },
  {
    name: "휴식",
    theme: THEME.BREAK,
    type: "time",
    value: 180,
  },
  {
    name: "반복",
    theme: THEME.REPS,
    type: "number",
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
          renderItem={({ index, item }) => (
            <Setting index={index} item={item} numColumns={2}></Setting>
          )}
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
