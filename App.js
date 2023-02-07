import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "@/screens/HomePage";
import TimerPage from "@/screens/TimerPage";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar translucent={true} backgroundColor={"transparent"}></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Timer" component={TimerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
