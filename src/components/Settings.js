import { View, FlatList } from "react-native";
import SettingCard from "@components/SettingCard";

const Settings = ({ settings }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        style={styles.grid}
        renderItem={({ item }) => (
          <SettingCard
            settingInfo={item}
            onPress={() => setModalVisible(true)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
  },
  startButton: {
    width: 340,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.PRIMARY,
  },
  grid: {
    padding: 10,
  },
});

export default Settings;
