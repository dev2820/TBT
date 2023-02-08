import { StyleSheet, Text } from "react-native";
import { Page, Card, CenterModal } from "@components/views";
import Title from "@components/Title";
import SETTING from "@constants/SETTING";
import Settings from "@components/Settings";
import NumberSet from "@components/NumberSet";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";
import { useModalStore } from "@store/modalStore";
import { observer } from "mobx-react-lite";

const settings = [
  {
    name: "준비",
    theme: THEME.READY,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "운동",
    theme: THEME.WORK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "휴식",
    theme: THEME.BREAK,
    type: SETTING.TYPE.TIME,
    value: 180,
  },
  {
    name: "반복",
    theme: THEME.REPS,
    type: SETTING.TYPE.REPS,
    value: 3,
  },
];

const modal = useModalStore();

const HomePage = ({ navigation }) => {
  const gotoTimer = () => {
    navigation.navigate("Timer");
  };
  return (
    <Page style={styles.container}>
      <Title>🔥 TBT 🔥</Title>
      <Settings settings={settings}></Settings>
      <Card style={styles.startButton} onPress={gotoTimer}>
        <Text style={[globalStyle.HEADING_LARGE, globalStyle.ON_PRIMARY]}>
          START
        </Text>
      </Card>
      <CenterModal
        isVisible={modal.isTimeModalVisible}
        onBackdropPress={() => modal.hideTimeModal()}
      >
        <NumberSet close={() => modal.hideTimeModal()} />
      </CenterModal>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
});

export default observer(HomePage);
