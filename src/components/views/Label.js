import { Text, View } from "react-native";
import globalStyle from "@assets/globalStyle";

const Label = ({ children, style }) => {
  return (
    <View style={style}>
      <Text style={globalStyle.LABEL_LARGE}>{children}</Text>
    </View>
  );
};

export default Label;
