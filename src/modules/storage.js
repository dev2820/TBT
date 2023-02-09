import AsyncStorage from "@react-native-async-storage/async-storage";

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e.message);
  }
};

const read = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};

export default {
  store,
  read,
};
