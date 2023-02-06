import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default HomePage = ({ navigation }) => {
  const TITLE = "Home";
  return (
    <View>
      <Text style={styles.text}>{TITLE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#987632",
  },
});
