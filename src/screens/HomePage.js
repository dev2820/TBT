import { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Page, Card } from "@components/views";
import Title from "@components/Title";
import SETTING from "@constants/SETTING";
import SettingCard from "@components/SettingCard";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

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
const openModal = (index) => {
  console.log(index);
};
const HomePage = ({ navigation }) => {
  const [isModalShow, setIsModalShow] = useState();

  const gotoTimer = () => {
    navigation.navigate("Timer");
  };

  return (
    <Page style={styles.container}>
      <Title>🔥 TBT 🔥</Title>
      <View style={styles.settings}>
        <FlatList
          data={settings}
          style={styles.grid}
          renderItem={({ item }) => (
            <SettingCard settingInfo={item} onPress={() => openModal(item)} />
          )}
          numColumns={2}
        />
      </View>
      <Card style={[styles.startButton]} onPress={gotoTimer}>
        <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
          START
        </Text>
      </Card>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  startButton: {
    width: 340,
    height: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
  settings: {
    justifyContent: "center",
    width: "100%",
  },
  grid: {
    padding: 10,
  },
});

export default HomePage;
