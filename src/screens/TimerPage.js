import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { observer } from "mobx-react-lite";
import { observe } from "mobx";
import { useTimerStore } from "@store/timerStore";
import { usePhaseStore } from "@store/phaseStore";
import { useViewportStore } from "@store/viewportStore";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";
import Player from "@components/Player";
import SmallPlayer from "@components/SmallPlayer";
import HeaderPage from "@components/HeaderPage";
import THEME from "@constants/THEME";

const phase = usePhaseStore();
const timer = useTimerStore();
const viewport = useViewportStore();

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
  const timerSizeStyle = {
    fontSize: viewport.vh > 300 ? 96 : 64,
  };
  const theme = { backgroundColor: phase.currentPhase?.theme ?? THEME.WORK };
  return (
    <HeaderPage
      style={[theme, styles.container]}
      leadingIcon="Home"
      onPressLeading={goBack}
    >
      <View style={styles.timer}>
        <Text style={globalStyle.HEADING_LARGE}>
          {phase.currentRep}/{phase.allRep} {phase.currentPhase?.name}
        </Text>
        <Text style={[timerSizeStyle, styles.time]}>
          {formatTime(timer.time)}
        </Text>
        {viewport.vh > 400 ? (
          <Player
            prev={() => phase.prev()}
            next={() => phase.next()}
            pause={() => phase.pause()}
            play={() => phase.resume()}
            isRun={phase.isRun}
          ></Player>
        ) : (
          <SmallPlayer
            prev={() => phase.prev()}
            next={() => phase.next()}
            pause={() => phase.pause()}
            play={() => phase.resume()}
            isRun={phase.isRun}
          ></SmallPlayer>
        )}
      </View>
    </HeaderPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  timer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  time: {
    textAlignVertical: "center",
    fontWeight: "700",
    letterSpacing: 4,
  },
});

export default observer(TimerPage);
