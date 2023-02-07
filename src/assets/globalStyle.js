import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  HEADING_LARGE: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "400",
  },
  HEADING_SMALL: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "400",
  },
  DISPLAY_LARGE: {
    fontSize: 57,
    lineHeight: 64,
    fontWeight: "400",
  },
  DISPLAY_MEDIUM: {
    lineHeight: 52,
    fontSize: 45,
    fontWeight: "400",
  },
  DISPLAY_SMALL: {
    lineHeight: 44,
    fontSize: 36,
    fontWeight: "400",
  },
  LABEL_LARGE: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  ON_PRIMARY: {
    color: "#ffffff",
  },
  ROUND: {
    borderRadius: 999,
  },
});

export default globalStyle;
