import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default HomePage = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const TITLE = "Home";
  return (
    <View
      style={{
        paddingTop: Math.floor(insets.top),
      }}
    >
      <Text style={styles.text}>{TITLE}</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate("Timer")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#987632",
  },
});
