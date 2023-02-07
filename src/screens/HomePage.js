import { StyleSheet, Text } from "react-native";
import { Page, Card } from "@components/views";
import Title from "@components/Title";
import Settings from "@components/Settings";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    navigation.navigate("Timer");
  };

  return (
    <Page style={styles.container}>
      <Title>🔥 TBT 🔥</Title>
      <Settings
        style={{
          height: 380,
          width: "100%",
        }}
      />
      <Card style={[styles.startButton]} onPress={gotoTimer}>
        <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
          START
        </Text>
      </Card>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  startButton: {
    width: 340,
    height: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
});

export default HomePage;
