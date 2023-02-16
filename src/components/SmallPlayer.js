import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyle from "@assets/globalStyle";

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
      <Text
        style={[
          styles.button,
          globalStyle.TITLE_LARGE,
          ,
          styles.smallController,
        ]}
        onPress={prev}
      >
        {"<"}
      </Text>
      <Text
        style={[styles.button, globalStyle.TITLE_LARGE, styles.largeController]}
        onPress={playController}
      >
        {isRunning ? "정지" : "계속"}
      </Text>
      <Text
        style={[
          styles.button,
          globalStyle.TITLE_LARGE,
          ,
          styles.smallController,
        ]}
        onPress={next}
      >
        {">"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    textAlignVertical: "center",
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
