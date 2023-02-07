import THEME from "@constants/THEME";
import { StyleSheet } from "react-native";

const theme = StyleSheet.create({
  [THEME.READY]: {
    backgroundColor: "#FCA14D",
  },
  [THEME.BREAK]: {
    backgroundColor: "#03D055",
  },
  [THEME.WORK]: {
    backgroundColor: "#FC4D4D",
  },
  [THEME.REPS]: {
    backgroundColor: "#33B5E5",
  },
  [THEME.PRIMARY]: {
    backgroundColor: "#0000FF",
    color: "#ffffff",
  },
});

export default theme;
