import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const Page = ({ children, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        style,
        {
          paddingTop: Math.floor(insets.top),
          paddingHorizontal: 16,
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Page;
