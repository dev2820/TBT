import { Text, StyleSheet } from "react-native";
import Card from "@components/views/Card";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <Card style={styles.button} onPress={onPress}>
      <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
        {title}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 340,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
    marginBottom: 16,
  },
});

export default PrimaryButton;
