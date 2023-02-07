import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Card = ({ children, style }) => {
  return (
    <TouchableOpacity style={[style, styles.container]}>
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
