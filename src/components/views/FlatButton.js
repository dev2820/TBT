import { Pressable } from "react-native";

const FlatButton = ({ onPress, children }) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

export default FlatButton;
