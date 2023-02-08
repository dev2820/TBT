import { StyleSheet, View } from "react-native";
import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";

const renderItem = ({ item }) => {
  <SettingCard setting={item} onPress={() => setModalVisible(true)} />;
};

const Settings = ({ settings }) => {
  return (
    <View style={styles.container}>
      <Grid numColumns={2} data={settings} renderItem={renderItem}></Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: "red",
  },
});

export default Settings;
