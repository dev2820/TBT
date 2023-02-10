import { useState } from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { observer } from "mobx-react-lite";
import { Page, Card } from "@components/views";
import Title from "@components/Title";
import Settings from "@components/Settings";
import ReadySetupModal from "@screens/ReadySetupModal";
import BreakSetupModal from "@screens/BreakSetupModal";
import WorkSetupModal from "@screens/WorkSetupModal";
import RepsSetupModal from "@screens/RepsSetupModal";
import globalStyle from "@assets/globalStyle";
import { usePhaseStore } from "@store/phaseStore";
import THEME from "@constants/THEME";
const phase = usePhaseStore();

const HomePage = ({ navigation }) => {
  const window = Dimensions.get("window");
  const [isTitleVisible, setTitleVisible] = useState(window.height >= 400);
  const [buttonHeight, setButtonHeight] = useState(
    Math.floor(Math.min((window.height / 2) * 0.5, 100))
  );
  Dimensions.addEventListener("change", (e) => {
    if (e.window.height < 400) {
      setTitleVisible(false);
    } else {
      setTitleVisible(true);
    }

    setButtonHeight(Math.floor(Math.min((e.window.height / 2) * 0.5, 100)));
  });
  const gotoTimer = () => {
    phase.init();
    navigation.navigate("Timer");
  };
  return (
    <Page style={styles.container}>
      {isTitleVisible && <Title>🔥 TBT 🔥</Title>}
      <Settings></Settings>
      <Card
        style={[styles.startButton, { height: buttonHeight }]}
        onPress={gotoTimer}
      >
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
    marginBottom: 16,
  },
  toRecordButton: {
    width: 340,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PLACEHOLDER,
  },
});

export default observer(HomePage);
