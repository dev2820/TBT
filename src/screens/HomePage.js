import { StyleSheet, Button } from "react-native";
import { Page } from "@components/views";
import Title from "@components/Title";
import Settings from "@components/Settings";

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    navigation.navigate("Timer");
  };

  return (
    <Page>
      <Title>🔥 TBT 🔥</Title>
      <Settings />
      <Button
        title="start"
        style={[styles.startButton]}
        onPress={gotoTimer}
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

export default HomePage;
