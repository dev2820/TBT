import { StyleSheet, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { Page } from "@components/views";
import ThemeButton from "@components/ThemeButton";
import Title from "@components/Title";
import Settings from "@components/Settings";
import SetupModal from "@screens/SetupModal";
import { usePhaseStore } from "@store/phaseStore";
import { useViewportStore } from "@store/viewportStore";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const phase = usePhaseStore();
const viewport = useViewportStore();

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    phase.init();
    navigation.navigate("Timer");
  };

  const startTextStyle =
    viewport.vh > 400 ? globalStyle.HEADING_LARGE : globalStyle.HEADING_SMALL;
  const startButtonStyle = {
    ...styles.startButton,
    height: viewport.vh > 400 ? styles.startButton.height : 60,
  };

  return (
    <Page style={styles.container}>
      {viewport.vh > 600 && <Title>🔥 TBT 🔥</Title>}
      <Settings></Settings>
      <ThemeButton
        onPress={gotoTimer}
        theme={THEME.PRIMARY}
        style={startButtonStyle}
      >
        <Text style={[globalStyle.ON_PRIMARY, startTextStyle]}>START</Text>
      </ThemeButton>
      <SetupModal></SetupModal>
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
    height: 80,
  },
});

export default observer(HomePage);
