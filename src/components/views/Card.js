import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    borderRadius: 16,
    padding: 20,
  },
});

export default Card;
