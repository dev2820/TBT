import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default TimerPage = ({ navigation }) => {
  const TITLE = "Timer";
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: Math.floor(insets.top),
      }}
    >
      <Text style={styles.text}>{TITLE}</Text>
      <Button title="Go Home" onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
});
