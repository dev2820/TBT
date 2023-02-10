import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
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
    <Page style={styles.container}>
      <View style={styles.center}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>
          🎉 완료 🎉
        </Text>
        <View style={styles.result}>
          <View style={styles.item}>
            <Text style={globalStyle.TITLE_MEDIUM}>준비 시간</Text>
            <Text style={globalStyle.TITLE_MEDIUM}>
              {formatTime(phase.totalReadyTime)}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={globalStyle.TITLE_MEDIUM}>운동 시간</Text>
            <Text style={globalStyle.TITLE_MEDIUM}>
              {formatTime(phase.totalWorkTime)}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={globalStyle.TITLE_MEDIUM}>휴식 시간</Text>
            <Text style={globalStyle.TITLE_MEDIUM}>
              {formatTime(phase.totalBreakTime)}
            </Text>
          </View>
          <Divider color={THEME.PLACEHOLDER_DARKER}></Divider>
          <View style={styles.item}>
            <Text style={globalStyle.TITLE_MEDIUM}>총합</Text>
            <Text style={globalStyle.TITLE_MEDIUM}>
              {formatTime(phase.totalTime)}
            </Text>
          </View>
          <TextInput style={styles.memo}></TextInput>
        </View>
        <FilledButton
          onPress={goHome}
          title="확인"
          theme={THEME.PRIMARY}
          textTheme={THEME.ON_PRIMARY}
          style={styles.confirm}
        ></FilledButton>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  result: {
    width: "80%",
    height: 360,
    justifyContent: "center",
  },
  memo: {
    borderColor: THEME.PLACEHOLDER,
  },
  confirm: {
    width: "80%",
    height: 60,
  },
});
export default TimerPage;
