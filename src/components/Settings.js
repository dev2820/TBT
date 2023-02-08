import SettingCard from "@components/SettingCard";
import { Grid } from "@components/views";

const renderItem = ({ item }) => {
  <SettingCard setting={item} onPress={() => setModalVisible(true)} />;
};
const Settings = ({ settings }) => {
  return <Grid numColumns={2} data={settings} renderItem={renderItem}></Grid>;
};

export default Settings;
