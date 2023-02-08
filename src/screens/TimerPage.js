import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Page } from "@components/views";
import { observer } from "mobx-react-lite";
import { useSetupStore } from "@store/setupStore";
import { useTimerStore } from "@store/timerStore";
import PHASE from "@constants/PHASE";

const setup = useSetupStore();
const timer = useTimerStore();

const TimerPage = ({ navigation }) => {
  useEffect(() => {
    timer.setTime(setup[PHASE.READY.NAME].value);
    timer.run();
  }, []);

  const goBack = () => {
    timer.clear();
    navigation.goBack();
  };

  if (timer.time === 0) {
    goBack();
  }

  return (
    <Page style={{ backgroundColor: "red" }}>
      <View style={styles.title}>
        <Button title="Home" onPress={goBack}></Button>
      </View>
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
