import React from "react";
import { Text, Button } from "react-native";
import { Page } from "@components/views";

const TimerPage = ({ navigation }) => {
  const goHome = () => {
    navigation.popToTop();
  };

  return (
    <Page>
      <Text>Great!</Text>
      <Button onPress={goHome} title="go home"></Button>
    </Page>
  );
};

export default TimerPage;
