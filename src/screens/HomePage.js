import { StyleSheet, Text } from "react-native";
import { Page, Card, CenterModal } from "@components/views";
import Title from "@components/Title";
import Settings from "@components/Settings";
import ReadySetupModal from "@screens/ReadySetupModal";
import BreakSetupModal from "@screens/BreakSetupModal";
import WorkSetupModal from "@screens/WorkSetupModal";
import RepsSetupModal from "@screens/RepsSetupModal";
import globalStyle from "@assets/globalStyle";
import { observer } from "mobx-react-lite";
import { usePhaseStore } from "@store/phaseStore";
import THEME from "@constants/THEME";

const phase = usePhaseStore();

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    phase.init();
    navigation.navigate("Timer");
  };
  return (
    <Page style={styles.container}>
      <Title>🔥 TBT 🔥</Title>
      <Settings></Settings>
      <Card style={styles.startButton} onPress={gotoTimer}>
        <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
          START
        </Text>
      </Card>
      <ReadySetupModal></ReadySetupModal>
      <BreakSetupModal></BreakSetupModal>
      <WorkSetupModal></WorkSetupModal>
      <RepsSetupModal></RepsSetupModal>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    width: 340,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
});

export default observer(HomePage);
