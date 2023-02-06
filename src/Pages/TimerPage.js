import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default TimerPage = ({ navigation }) => {
  const TITLE = "Timer";
  return (
    <View>
      <Text style={styles.text}>{TITLE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
});
