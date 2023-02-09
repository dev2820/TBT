import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Page, RoundCard } from "@components/views";
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
    <Page style={[theme, styles.container]}>
      <View style={styles.topbar}>
        <Button style={styles.home} title="Home" onPress={goBack}></Button>
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
        <View style={styles.player}>
          <RoundCard
            style={[styles.smallController]}
            onPress={() => phase.prev()}
          >
            <Text>{"<"}</Text>
          </RoundCard>

          {phase.isRun ? (
            <RoundCard
              style={[styles.largeController]}
              onPress={() => phase.pause()}
            >
              <Text>정지</Text>
            </RoundCard>
          ) : (
            <RoundCard
              style={[styles.largeController]}
              onPress={() => phase.resume()}
            >
              <Text>계속</Text>
            </RoundCard>
          )}
          <RoundCard
            style={[styles.smallController]}
            onPress={() => phase.next()}
          >
            <Text>{">"}</Text>
          </RoundCard>
        </View>
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
  player: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    marginTop: 40,
  },
  smallController: {
    width: 80,
    height: 80,
    backgroundColor: "white",
  },
  largeController: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    marginHorizontal: 32,
  },
});

export default observer(TimerPage);
