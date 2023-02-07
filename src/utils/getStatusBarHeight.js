import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar, Platform } from "react-native";

export default () => {
  Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;
};
