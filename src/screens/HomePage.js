import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Page, Card, ThemeButton } from "@components/views";
import THEME from "@constants/THEME";
import GLOBAL from "@constants/GLOBAL";
import GlobalStyle from "@assets/styles/GlobalStyle";
import formatTime from "@utils/formatTime";

const phaseSettings = [
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
      <Card theme={item.theme} style={[styles.card]}>
        <Text>{item.name}</Text>
        <Text style={GlobalStyle[GLOBAL.TEXT.HEADING.LARGE]}>
          {item.type === "time" ? formatTime(item.value) : item.value}
        </Text>
      </Card>
    </View>
  );
};

export default HomePage = ({ navigation }) => {
  const Title = "🔥 TBT 🔥";
  return (
    <Page style={{ alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}></View>
      <Text style={[styles.title, GlobalStyle[GLOBAL.TEXT.DISPLAY.LARGE]]}>
        {Title}
      </Text>
      <View style={styles.settingsContainer}>
        <FlatList
          data={phaseSettings}
          style={styles.grid}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
      <ThemeButton
        style={[GlobalStyle.round, styles.startButton]}
        theme={THEME.PRIMARY}
        onPress={() => navigation.navigate("Timer")}
      >
        <Text style={{ fontSize: 32 }}>Start</Text>
      </ThemeButton>
      <View style={{ flex: 1, justifyContent: "flex-end" }}></View>
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
  grid: {
    flex: 1,
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
