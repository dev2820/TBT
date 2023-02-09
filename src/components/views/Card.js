import globalStyle from "@assets/globalStyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ children, style, onPress }) => {
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
    borderRadius: 30,
  },
});

export default Card;
