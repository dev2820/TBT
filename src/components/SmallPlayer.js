import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RoundCard } from "@components/views";

const SmallPlayer = ({ style, prev, play, pause, next, isRun }) => {
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
    <View style={[styles.container, style]}>
      <Text onPress={prev}>{"<"}</Text>
      <Text onPress={playController}>{isRunning ? "정지" : "계속"}</Text>
      <Text onPress={next}>{">"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallController: {
    backgroundColor: "white",
  },
  largeController: {
    backgroundColor: "white",
    marginHorizontal: 32,
  },
});

export default SmallPlayer;
