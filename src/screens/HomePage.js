import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { Page } from "@components/views";
import PrimaryButton from "@components/PrimaryButton";
import Title from "@components/Title";
import Settings from "@components/Settings";
import ReadySetupModal from "@screens/ReadySetupModal";
import BreakSetupModal from "@screens/BreakSetupModal";
import WorkSetupModal from "@screens/WorkSetupModal";
import RepsSetupModal from "@screens/RepsSetupModal";
import globalStyle from "@assets/globalStyle";
import { usePhaseStore } from "@store/phaseStore";
import { useViewportStore } from "@store/viewportStore";
import THEME from "@constants/THEME";

const phase = usePhaseStore();
const viewportStore = useViewportStore();

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    phase.init();
    navigation.navigate("Timer");
  };
  return (
    <Page style={styles.container}>
      {viewportStore.vh > 600 && <Title>🔥 TBT 🔥</Title>}
      <Settings></Settings>
      <PrimaryButton title="START" onPress={gotoTimer}></PrimaryButton>
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
});

export default observer(HomePage);
