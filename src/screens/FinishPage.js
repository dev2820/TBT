import React, { useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Page, Divider, FilledButton } from "@components/views";
import { usePhaseStore } from "@store/phaseStore";
import formatTime from "@utils/formatTime";
import formatDate from "@utils/formatDate";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const phase = usePhaseStore();

const TimerPage = ({ navigation }) => {
  const goHome = () => {
    navigation.navigate("Home");
  };
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      if (e.data.action.type === "NAVIGATE") return;
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <Page style={styles.container}>
      <View style={styles.center}>
        <Text style={[globalStyle.HEADING_LARGE, styles.title]}>
          🎉 완료 🎉
        </Text>
        <Text style={[globalStyle.TITLE_MEDIUM, styles.date]}>
          {formatDate(new Date())}
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
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.memo}
            placeholder={"운동에 대한 기록을 남기세요"}
          ></TextInput>
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
  date: {
    fontWeight: "700",
  },
  center: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  result: {
    width: "80%",
    marginVertical: 48,
    justifyContent: "center",
  },
  memo: {
    marginTop: 16,
    borderColor: THEME.PLACEHOLDER,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    textAlign: "left",
    textAlignVertical: "top",
  },
  confirm: {
    width: "80%",
    height: 60,
  },
});
export default TimerPage;
