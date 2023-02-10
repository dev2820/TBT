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
  const window = Dimensions.get("window");
  const [isRepsPositionBotton, setRepsPositionBottom] = useState(
    window.height >= 500
  );
  const [timerTop, setTimerTop] = useState(
    Math.floor(Math.min(window.height / 20, 88))
  );
  const [timerHeight, setTimerHeight] = useState(
    Math.floor(Math.min(window.height / 2.8, 300))
  );
  Dimensions.addEventListener("change", (e) => {
    if (e.window.height < 500) {
      setRepsPositionBottom(false);
    } else {
      setRepsPositionBottom(true);
    }
    setTimerTop(Math.floor(Math.min(e.window.height / 20, 88)));
    setTimerHeight(Math.floor(Math.min(e.window.height / 2.8, 300)));
  });
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
      <View style={[styles.timer, { top: timerTop }]}>
        <Text style={globalStyle.TITLE_LARGE}>
          {phase.currentPhase?.name}
          {!isRepsPositionBotton && ` ${phase.currentRep}/${phase.allRep} Reps`}
        </Text>
        <Text
          style={[
            globalStyle.DISPLAY_EXTRA_LARGE,
            styles.time,
            { height: timerHeight },
          ]}
        >
          {formatTime(timer.time)}
        </Text>
        {isRepsPositionBotton && (
          <View style={styles.reps}>
            <Text style={[globalStyle.DISPLAY_MEDIUM]}>{phase.currentRep}</Text>
            <Text style={globalStyle.HEADING_SMALL}>/{phase.allRep} Reps</Text>
          </View>
        )}
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
    height: 44,
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default observer(TimerPage);
