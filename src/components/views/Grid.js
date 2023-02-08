import { FlatList, StyleSheet } from "react-native";

const Grid = ({ numColumns, renderItem, data }) => {
  return (
    <FlatList
      data={data}
      style={styles.grid}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 10,
  },
});
export default Grid;
