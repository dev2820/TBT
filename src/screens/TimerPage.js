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
let diposer = null;
const clearTimer = () => {
  if (diposer) {
    diposer();
    diposer = null;
  }
  timer.clear();
};

const TimerPage = ({ navigation }) => {
  const goBack = () => {
    clearTimer();
    navigation.pop();
  };
  useEffect(() => {
    phase.run();
    if (diposer) return;

    diposer = observe(phase, "isFinished", ({ newValue }) => {
      if (newValue === true) {
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
        <View style={styles.reps}>
          <Text style={[globalStyle.DISPLAY_MEDIUM]}>{phase.currentRep}</Text>
          <Text style={globalStyle.HEADING_SMALL}>/{phase.allRep} Reps</Text>
        </View>
      </View>
      <View>
        <Button title=">" onPress={() => phase.next()}></Button>
        {phase.isRun ? (
          <Button title="정지" onPress={() => phase.pause()}></Button>
        ) : (
          <Button title="계속" onPress={() => phase.resume()}></Button>
        )}
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
  reps: {
    height: 44,
    flexDirection: "row",
    alignItems: "baseline",
  },
  topbar: {
    height: 56,
  },
});

export default observer(TimerPage);
