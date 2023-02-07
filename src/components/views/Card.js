import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    borderRadius: 16,
  },
});

export default Card;
