import { StyleSheet, View } from "react-native";
import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";
import { useModalStore } from "@store/modalStore";
import { useSetupStore } from "@store/setupStore";
import { observer } from "mobx-react-lite";
import PHASE from "@constants/PHASE";
import REPS from "@constants/REPS";

const modal = useModalStore();
const setup = useSetupStore();

const Settings = () => {
  const showModal = (key) => {
    setup.setCurrentSetup(key);
    modal.showModal();
  };
  return (
    <View style={styles.container}>
      <Grid
        numColumns={2}
        data={setup.settings}
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
