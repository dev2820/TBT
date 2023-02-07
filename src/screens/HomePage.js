import { StyleSheet, Button } from "react-native";
import { Page } from "@components/views";
import Title from "@components/Title";
import Settings from "@components/Settings";
import THEME from "@constants/THEME";

export default HomePage = ({ navigation }) => {
  return (
    <Page style={{ alignItems: "center" }}>
      <Title>🔥 TBT 🔥</Title>
      <Settings />
      <Button
        title="start"
        style={[styles.startButton]}
        theme={THEME.PRIMARY}
        onPress={() => navigation.navigate("Timer")}
      ></Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  startButton: {
    width: 160,
    height: 160,
    elevation: 6,
    alignItems: "center",
  },
});
