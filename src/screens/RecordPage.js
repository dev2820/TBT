import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { Page, Record } from "@components/views";
import { useRecordStore } from "@store/recordStore";
import globalStyle from "@assets/globalStyle";
import THEME from "@constants/THEME";
import { observer } from "mobx-react-lite";

const record = useRecordStore();

const RecordPage = ({ navigation }) => {
  const goBack = () => {
    navigation.pop();
  };
  return (
    <Page style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.leading}>
          <Pressable style={styles.leadingIcon} onPress={goBack}>
            <Text>{"<"}</Text>
          </Pressable>
        </View>
        <Text style={[globalStyle.TITLE_LARGE, styles.title]}>기록</Text>
        <View style={styles.trailing}></View>
      </View>
      <FlatList
        style={styles.records}
        data={record.records}
        inverted={true}
        keyExtractor={record.date}
        renderItem={({ index, item }) => (
          <Record
            record={item}
            onDelete={() => record.removeRecord(index)}
          ></Record>
        )}
      ></FlatList>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {},
  topbar: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  records: {
    flexDirection: "column-reverse",
  },
  leading: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  leadingIcon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  trailing: {
    width: 48,
    height: 48,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});

export default observer(RecordPage);
