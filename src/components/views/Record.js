import { View, Text, Button } from "react-native";
import globalStyle from "@assets/globalStyle";
import PHASE from "@constants/PHASE";
import formatDate from "@utils/formatDate";

const Record = ({ record, onDelete }) => {
  const calcTotal = (record) => {
    return (
      record.setup[PHASE.READY.NAME] +
      record.setup[PHASE.WORK.NAME] +
      record.setup[PHASE.BREAK.NAME]
    );
  };
  return (
    <View>
      <Text style={globalStyle.LABEL_LARGE}>{formatDate(record.date)}</Text>
      <Text style={globalStyle.LABEL_LARGE}>{record.memo}</Text>
      <Text style={globalStyle.LABEL_LARGE}>{calcTotal(record)}</Text>
      <Button title="삭제" onPress={onDelete}></Button>
    </View>
  );
};
export default Record;
