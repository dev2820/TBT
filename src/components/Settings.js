import SettingCard from "@components/SettingCard";

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

const Settings = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        style={styles.grid}
        renderItem={({ item }) => <SettingCard settingInfo={item} />}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 60,
  },
  grid: {
    padding: 10,
  },
});

export default Settings;
