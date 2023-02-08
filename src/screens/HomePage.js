import { StyleSheet, Text } from "react-native";
import { Page, Card, CenterModal } from "@components/views";
import Title from "@components/Title";
import SETTING from "@constants/SETTING";
import Settings from "@components/Settings";
import ReadySetupModal from "@screens/ReadySetupModal";
import BreakSetupModal from "@screens/BreakSetupModal";
import WorkSetupModal from "@screens/WorkSetupModal";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";
import { observer } from "mobx-react-lite";

const settings = [
  {
    name: "준비",
    key: PHASE.READY.NAME,
    theme: THEME.READY,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "운동",
    key: PHASE.WORK.NAME,
    theme: THEME.WORK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "휴식",
    key: PHASE.BREAK.NAME,
    theme: THEME.BREAK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "반복",
    key: REPS.NAME,
    theme: THEME.REPS,
    type: SETTING.TYPE.REPS,
    value: 3,
  },
];

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    navigation.navigate("Timer");
  };
  return (
    <Page style={styles.container}>
      <Title>🔥 TBT 🔥</Title>
      <Settings settings={settings}></Settings>
      <Card style={styles.startButton} onPress={gotoTimer}>
        <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
          START
        </Text>
      </Card>
      <ReadySetupModal></ReadySetupModal>
      <BreakSetupModal></BreakSetupModal>
      <WorkSetupModal></WorkSetupModal>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
});

export default observer(HomePage);
