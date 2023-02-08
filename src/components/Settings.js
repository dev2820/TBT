import { StyleSheet, View } from "react-native";
import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";
import { useModalStore } from "@store/modalStore";
import { observer } from "mobx-react-lite";

const modalStore = useModalStore();

const Settings = ({ settings }) => {
  return (
    <View style={styles.container}>
      <Grid
        numColumns={2}
        data={settings}
        renderItem={({ item }) => (
          <SettingCard
            setting={item}
            onPress={() => modalStore.showTimeModal()}
          />
        )}
      ></Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
  },
});

export default observer(Settings);
