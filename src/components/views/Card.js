import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({ children, theme, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    borderRadius: 16,
    padding: 20,
  },
});

export default Card;

/**
 * Button은 android와 ios가 다르게 보이기 때문에 TouchableOpacity를
 * 사용해 같은 UI로 보이게 만든다.
 */
