import { StyleSheet, View } from "react-native";
import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";
import { useModalStore } from "@store/modalStore";
import { observer } from "mobx-react-lite";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";

const modalStore = useModalStore();

const Settings = ({ settings }) => {
  const showModal = (key) => {
    if (key === PHASE.READY.NAME) {
      modalStore.showReadySetupModal();
      return;
    }
  };
  return (
    <View style={styles.container}>
      <Grid
        numColumns={2}
        data={settings}
        renderItem={({ item }) => (
          <SettingCard setting={item} onPress={() => showModal(item.key)} />
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
