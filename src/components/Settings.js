import { StyleSheet, View } from "react-native";
import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";
import { useModalStore } from "@store/modalStore";
import { observer } from "mobx-react-lite";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";
import { useSetupStore } from "@store/setupStore";

const modal = useModalStore();
const setup = useSetupStore();

const Settings = () => {
  const showModal = (key) => {
    if (key === PHASE.READY.NAME) {
      modal.showReadySetupModal();
      return;
    }
    if (key === PHASE.BREAK.NAME) {
      modal.showBreakSetupModal();
      return;
    }
    if (key === PHASE.WORK.NAME) {
      modal.showWorkSetupModal();
      return;
    }
    if (key === REPS.NAME) {
      modal.showRepsSetupModal();
      return;
    }
  };
  const settings = [
    setup[PHASE.READY.NAME],
    setup[PHASE.WORK.NAME],
    setup[PHASE.BREAK.NAME],
    setup[REPS.NAME],
  ];
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
