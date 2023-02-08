import { useState } from "react";
import { StyleSheet, Text, FlatList, View, TextInput } from "react-native";
import { Page, Card, CenterModal } from "@components/views";
import Title from "@components/Title";
import SETTING from "@constants/SETTING";
import SettingCard from "@components/SettingCard";
import NumberSetPage from "@screens/NumberSetPage";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";
import { usePhaseStore } from "@store/phaseStore";
import { useModalStore } from "@store/modalStore";
import { Observer } from "mobx-react-lite";

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

const HomePage = ({ navigation }) => {
  const modal = useModalStore();
  const gotoTimer = () => {
    navigation.navigate("Timer");
  };

  return (
    <Observer>
      {() => (
        <Page style={styles.container}>
          <Title>🔥 TBT 🔥</Title>
          <View style={styles.settings}>
            <FlatList
              data={settings}
              style={styles.grid}
              renderItem={({ item }) => (
                <SettingCard settingInfo={item} onPress={modal.showTimeModal} />
              )}
              numColumns={2}
            />
          </View>
          <Card style={styles.startButton} onPress={gotoTimer}>
            <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
              START
            </Text>
          </Card>
          <CenterModal
            isVisible={modal.isTimeModalVisible}
            onBackdropPress={modal.hideTimeModal}
          >
            <NumberSetPage close={modal.hideTimeModal} />
          </CenterModal>
        </Page>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  startButton: {
    width: 340,
    height: 80,
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
