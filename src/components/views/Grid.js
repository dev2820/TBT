import { View, FlatList, StyleSheet } from "react-native";

const Grid = ({ numColumns, renderItem, data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.grid}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
  },
  grid: {
    padding: 10,
  },
});
export default Grid;
