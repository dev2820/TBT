import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Page } from "@components/views";
import { observer } from "mobx-react-lite";
import { observe } from "mobx";
import { useTimerStore } from "@store/timerStore";
import { usePhaseStore } from "@store/phaseStore";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";

const phase = usePhaseStore();
const timer = useTimerStore();

const TimerPage = ({ navigation }) => {
  const goBack = () => {
    timer.clear();
    navigation.pop();
  };
  useEffect(() => {
    phase.run();
    const diposer = observe(phase, "isFinished", ({ newValue }) => {
      if (newValue === true) {
        diposer();
        goBack();
      }
    });
  }, []);
  const theme = { backgroundColor: phase.currentPhase?.theme };
  return (
    <Page style={theme}>
      <View style={styles.topbar}>
        <Button title="Home" onPress={goBack}></Button>
      </View>
      <View style={styles.timer}>
        <Text style={globalStyle.HEADING_LARGE}>
          {phase.currentPhase?.name}
        </Text>
        <Text style={[globalStyle.DISPLAY_EXTRA_LARGE, styles.time]}>
          {formatTime(timer.time)}
        </Text>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
  timer: {
    alignItems: "center",
    top: 88,
  },
  time: {
    height: 380,
    textAlignVertical: "center",
    fontWeight: "700",
    letterSpacing: 8,
  },
  state: {},
  topbar: {
    height: 56,
  },
});

export default observer(TimerPage);
