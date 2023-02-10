import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Page, Divider, FilledButton } from "@components/views";
import { usePhaseStore } from "@store/phaseStore";
import formatTime from "@utils/formatTime";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const phase = usePhaseStore();

const TimerPage = ({ navigation }) => {
  const goHome = () => {
    navigation.popToTop();
  };

  return (
    <Page>
      <Text style={globalStyle.DISPLAY_SMALL}>완료!</Text>
      <View style={styles.item}>
        <Text>준비 시간</Text>
        <Text>{formatTime(phase.totalReadyTime)}</Text>
      </View>
      <View style={styles.item}>
        <Text>운동 시간</Text>
        <Text>{formatTime(phase.totalWorkTime)}</Text>
      </View>
      <View style={styles.item}>
        <Text>휴식 시간</Text>
        <Text>{formatTime(phase.totalBreakTime)}</Text>
      </View>
      <Divider color={THEME.PLACEHOLDER_DARKER}></Divider>
      <View style={styles.item}>
        <Text>총합</Text>
        <Text>{formatTime(phase.totalTime)}</Text>
      </View>
      <FilledButton
        onPress={goHome}
        title="확인"
        theme={THEME.PRIMARY}
        textTheme={THEME.ON_PRIMARY}
        style={{ width: "100%", height: 60 }}
      ></FilledButton>
    </Page>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TimerPage;
