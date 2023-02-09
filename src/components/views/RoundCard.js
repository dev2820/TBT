import globalStyle from "@assets/globalStyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const RoundCard = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, globalStyle.EVEVATION5, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoundCard;
