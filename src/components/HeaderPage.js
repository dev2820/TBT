import { View, StyleSheet, Button } from "react-native";
import { Page } from "@components/views";

/**
 * 현재는 leadingIcon으로 string을 사용하지만 추후 icon에 관련된 컴포넌트를 만들어
 * 대체할 예정
 */
const HeaderPage = ({ children, style, leadingIcon, onPressLeading }) => {
  return (
    <Page style={style}>
      <View style={styles.topbar}>
        <Button
          style={styles.leading}
          title={leadingIcon}
          onPress={onPressLeading}
        ></Button>
      </View>
      {children}
    </Page>
  );
};

const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    height: 56,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  leading: {
    width: 48,
    height: 48,
    left: 0,
  },
});
export default HeaderPage;
