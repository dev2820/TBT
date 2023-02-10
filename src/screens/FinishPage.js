import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Page, Divider, FilledButton } from "@components/views";
import { usePhaseStore } from "@store/phaseStore";
import formatTime from "@utils/formatTime";
import formatDate from "@utils/formatDate";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";

const phase = usePhaseStore();
const FinishPage = ({ navigation }) => {
  const window = Dimensions.get("window");
  const finishDate = new Date();
  const [isTitleVisible, setTitleVisible] = useState(window.height >= 500);
  const [between, setBetween] = useState(window.height < 500 ? 8 : 48);
  Dimensions.addEventListener("change", (e) => {
    if (e.window.height < 500) {
      setTitleVisible(false);
      setBetween(8);
    } else {
      setTitleVisible(true);
      setBetween(48);
    }
  });
  const confirmHandler = () => {
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
        {isTitleVisible && (
          <Text style={[globalStyle.HEADING_LARGE, styles.title]}>
            🎉 완료 🎉
          </Text>
        )}
        <Text style={[globalStyle.TITLE_MEDIUM, styles.date]}>
          {formatDate(finishDate)}
        </Text>
        <View style={[styles.result, { marginVertical: between }]}>
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
        </View>
        <FilledButton
          onPress={confirmHandler}
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
  confirm: {
    width: "80%",
    height: 60,
  },
});
export default FinishPage;
