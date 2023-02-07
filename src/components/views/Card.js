import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    elevation: 4,
    borderRadius: 12,
    padding: 20,
  },
});

export default Card;

/**
 * Button은 android와 ios가 다르게 보이기 때문에 TouchableOpacity를
 * 사용해 같은 UI로 보이게 만든다.
 */
