import { StyleSheet, View, Text } from "react-native";
import { Card } from "@components/views";
import globalStyle from "@assets/globalStyle";
import formatTime from "@utils/formatTime";

const Setting = ({ index, item, numColumns }) => {
  return (
    <View style={[styles.container]}>
      <Card style={styles.card}>
        <Text>{item.name}</Text>
        <Text style={globalStyle.HEADING_LARGE}>
          {item.type === "time" ? formatTime(item.value) : item.value}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  firstOfLine: {
    alignItems: "flex-end",
  },
  lastOfLine: {
    alignItems: "flex-start",
  },
  card: {
    width: 160,
    height: 160,
  },
});

export default Setting;
