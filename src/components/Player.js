import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { RoundCard } from "@components/views";

const Player = ({ style, prev, play, pause, next, isRun }) => {
  const window = Dimensions.get("window");
  const [isRunning, setIsRunning] = useState(isRun);
  const [buttonSize, setButtonSize] = useState(
    Math.floor(Math.min(window.height / 4, 120))
  );
  const [marginTop, setMarginTop] = useState(window.height < 500 ? 4 : 56);
  Dimensions.addEventListener("change", (e) => {
    if (e.window.height < 500) {
      setMarginTop(4);
    } else {
      setMarginTop(56);
    }
    setButtonSize(Math.floor(Math.min(e.window.height / 4, 120)));
  });
  useEffect(() => {
    setIsRunning(isRun);
  }, [isRun]);
  const playController = () => {
    if (isRunning) pause();
    else play();

    setIsRunning(!isRunning);
  };
  return (
    <View
      style={[
        styles.container,
        { height: buttonSize, marginTop: marginTop },
        style,
      ]}
    >
      <RoundCard
        style={[
          styles.smallController,
          { width: (buttonSize * 2) / 3, height: (buttonSize * 2) / 3 },
        ]}
        elevation={10}
        onPress={prev}
      >
        <Text>{"<"}</Text>
      </RoundCard>
      <RoundCard
        style={[
          styles.largeController,
          { width: buttonSize, height: buttonSize },
        ]}
        elevation={10}
        onPress={playController}
      >
        <Text>{isRunning ? "정지" : "계속"}</Text>
      </RoundCard>
      <RoundCard
        style={[
          styles.smallController,
          { width: (buttonSize * 2) / 3, height: (buttonSize * 2) / 3 },
        ]}
        elevation={10}
        onPress={next}
      >
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
