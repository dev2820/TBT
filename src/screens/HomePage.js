import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Page, Card } from "@components/views";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import Title from "@components/Title";
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

const renderItem = ({ index, item }) => {
  const isFirstElementOfLine = index % 2 === 0;
  const itemPositionStyle = isFirstElementOfLine
    ? styles.firstOfLine
    : styles.lastOfLine;
  return (
    <View style={[styles.gridItem, itemPositionStyle]}>
      <Card style={[styles.card]}>
        <Text>{item.name}</Text>
        <Text style={globalStyle.HEADING_LARGE}>
          {item.type === "time" ? formatTime(item.value) : item.value}
        </Text>
      </Card>
    </View>
  );
};

export default HomePage = ({ navigation }) => {
  return (
    <Page style={{ alignItems: "center" }}>
      <Title>🔥 TBT 🔥</Title>
      <View style={styles.settingsContainer}>
        <FlatList
          data={settings}
          style={styles.grid}
          renderItem={renderItem}
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
    height: 400,
    justifyContent: "center",
    width: "100%",
    marginBottom: 60,
  },
  gridItem: {
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
  startButton: {
    width: 160,
    height: 160,
    elevation: 6,
    alignItems: "center",
  },
});
