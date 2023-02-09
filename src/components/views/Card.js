import globalStyle from "@assets/globalStyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ children, style, onPress, elevation }) => {
  const elevationStyle = elevation ? { elevation } : globalStyle.ELEVATION5;
  return (
    <TouchableOpacity
      style={[styles.container, elevationStyle, style]}
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
