import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Page } from "@components/views";
import { observer } from "mobx-react-lite";
import { observe } from "mobx";
import { useSetupStore } from "@store/setupStore";
import { useTimerStore } from "@store/timerStore";
import { usePhaseStore } from "@store/phaseStore";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";
import THEME from "@constants/THEME";

const setup = useSetupStore();
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

  return (
    <Page style={{ backgroundColor: phase.currentPhase?.theme }}>
      <View style={styles.title}>
        <Button title="Home" onPress={goBack}></Button>
      </View>
      <Text>{phase.currentPhase?.name}</Text>
      <Text>
        {timer.time} {timer.state}
      </Text>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
  title: {
    height: 56,
  },
});

export default observer(TimerPage);
