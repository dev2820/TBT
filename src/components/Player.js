import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RoundCard } from "@components/views";

const Player = ({ prev, play, pause, next, isRun }) => {
  const [isRunning, setIsRunning] = useState(isRun);
  useEffect(() => {
    setIsRunning(isRun);
  }, [isRun]);
  const playController = () => {
    if (isRunning) pause();
    else play();

    setIsRunning(!isRunning);
  };
  return (
    <View style={styles.container}>
      <RoundCard style={[styles.smallController]} elevation={10} onPress={prev}>
        <Text>{"<"}</Text>
      </RoundCard>
      <RoundCard
        style={[styles.largeController]}
        elevation={10}
        onPress={playController}
      >
        <Text>{isRunning ? "정지" : "계속"}</Text>
      </RoundCard>
      <RoundCard style={[styles.smallController]} elevation={10} onPress={next}>
        <Text>{">"}</Text>
      </RoundCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    marginTop: 80,
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

export default Player;
