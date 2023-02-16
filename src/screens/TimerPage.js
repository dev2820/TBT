import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { Page } from "@components/views";
import { observer } from "mobx-react-lite";
import { observe } from "mobx";
import { useTimerStore } from "@store/timerStore";
import { usePhaseStore } from "@store/phaseStore";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import Player from "@components/Player";
import THEME from "@constants/THEME";

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
    navigation.navigate("Home");
  };
  const goFinish = () => {
    clearTimer();
    navigation.navigate("Finish");
  };
  useEffect(() => {
    phase.run();
    if (diposer) return;

    diposer = observe(phase, "isFinished", ({ newValue }) => {
      if (newValue === true) {
        goFinish();
      }
    });
  }, []);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      if (e.data.action.type === "NAVIGATE") return;
      e.preventDefault();
    });
  }, [navigation]);

  const theme = { backgroundColor: phase.currentPhase?.theme ?? THEME.WORK };
  return (
    <Page style={[theme, styles.container]}>
      <View style={styles.topbar}>
        <Button style={styles.home} title="Home" onPress={goBack}></Button>
      </View>
      <View style={styles.timer}>
        <View style={styles.reps}>
          <Text style={globalStyle.HEADING_LARGE}>
            {phase.currentRep}/{phase.allRep} {phase.currentPhase?.name}
          </Text>
        </View>
        <Text style={[globalStyle.DISPLAY_EXTRA_LARGE, styles.time]}>
          {formatTime(timer.time)}
        </Text>
        <Player
          prev={() => phase.prev()}
          next={() => phase.next()}
          pause={() => phase.pause()}
          play={() => phase.resume()}
          isRun={phase.isRun}
        ></Player>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topbar: {
    width: "100%",
    height: 56,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  home: {
    width: 48,
    height: 48,
    left: 0,
  },
  timer: {
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    height: 300,
    textAlignVertical: "center",
    fontWeight: "700",
    letterSpacing: 8,
  },
  reps: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default observer(TimerPage);
