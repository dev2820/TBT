import GLOBAL from "@constants/GLOBAL";
import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  [GLOBAL.TEXT.HEADING.LARGE]: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "400",
  },
  [GLOBAL.TEXT.HEADING.SMALL]: {
    fontSize: 24,
    lineHeight: 32,
    weight: "400",
  },
  [GLOBAL.TEXT.LABEL.LARGE]: {
    fontSize: 14,
    lineHeight: 20,
    weight: "500",
  },
  round: {
    borderRadius: 999,
  },
});

export default globalStyle;
