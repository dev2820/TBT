import { View, StyleSheet, Text } from "react-native";
import DATE from "@constants/DATE";
import THEME from "@constants/THEME";
import globalStyle from "@assets/globalStyle";

const getDateTheme = (date) => {
  if (date.getDay() === DATE.SUN) {
    return { color: THEME.SUM };
  }
  if (date.getDay() === DATE.SAT) {
    return { color: THEME.SAT };
  }
  return { color: THEME.ON_SURFACE };
};
const SquareDate = ({ date, style }) => {
  const dateTheme = getDateTheme(date);
  return (
    <View style={[styles.container, style]}>
      <Text style={[dateTheme, globalStyle.HEADING_SMALL, styles.date]}>
        {date.getDate()}
      </Text>
      <Text style={[globalStyle.LABEL_SMALL, styles.monthYear]}>
        {date.getFullYear()}.{("00" + (date.getMonth() + 1)).slice(-2)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  date: {
    textAlign: "center",
  },
  monthYear: {
    textAlign: "center",
    color: THEME.PLACEHOLDER_DARKER,
  },
});
export default SquareDate;
