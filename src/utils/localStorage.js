import AsyncStorage from '@react-native-async-storage/async-storage';

export const set = async (key, value) => {
  try {
    console.log('key and value is: ', key, value);
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log('Error in setItem asynStorage ====', error.message);
  }
};

export const get = async key => {
  let value = '';
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
    // Error retrieving data
    console.log('Erro in getItem  asynStorage  =====', error.message);
  }
  return value;
};

export const setObject = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error in set object in asyncStorage  ====', error.message);
  }
};

export const getObject = async key => {
  let value = {};
  try {
    let obj = (await AsyncStorage.getItem(key)) || undefined;
    value = !!obj ? JSON.parse(obj) : {};
    console.log('Object in getObject asynsStorage ====', value);
  } catch (error) {
    console.log('Error in getOject AsyncStorage ====', error.message);
  }
  return value;
};
