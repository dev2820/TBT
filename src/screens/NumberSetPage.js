import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FlatButton } from "@components/views";
import { usePhaseStore } from "@store/phaseStore";
import { observer } from "mobx-react-lite";

const phase = usePhaseStore();

const NumberSetPage = ({ close }) => {
  const [currentNum, setCurrentNum] = useState(3);
  const confirm = () => {
    phase.setNum(currentNum);
    close();
  };
  return (
    <View>
      <Text style={styles.text}>Hi {currentNum}</Text>
      <TextInput
        type="numberic"
        onChangeText={(text) => setCurrentNum(parseInt(text), 10)}
      ></TextInput>
      <FlatButton onPress={confirm}>
        <Text>확인</Text>
      </FlatButton>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
});

export default observer(NumberSetPage);
