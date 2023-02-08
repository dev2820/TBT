import { View, Pressable, Text } from "react-native";

const Confirm = ({ children, onConfirm }) => {
  const CONFIRM = "확인";
  return (
    <View>
      {children}
      <Pressable onPress={onConfirm}>
        <Text>{CONFIRM}</Text>
      </Pressable>
    </View>
  );
};

export default Confirm;
