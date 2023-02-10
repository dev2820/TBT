import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import HomePage from "@screens/HomePage";
import TimerPage from "@screens/TimerPage";
import FinishPage from "@screens/FinishPage";
import RecordPage from "@screens/RecordPage";
import { useSetupStore } from "@store/setupStore";
import { useRecordStore } from "@store/recordStore";

const Stack = createNativeStackNavigator();
const setup = useSetupStore();
const record = useRecordStore();

SplashScreen.preventAutoHideAsync();

export default () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    const prepare = async () => {
      try {
        await setup.init();
        await record.loadRecords();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer initialRouteName="Home" onReady={onLayoutRootView}>
      <StatusBar translucent={true} backgroundColor={"transparent"}></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Timer" component={TimerPage} />
        <Stack.Screen name="Finish" component={FinishPage} />
        <Stack.Screen name="Record" component={RecordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
