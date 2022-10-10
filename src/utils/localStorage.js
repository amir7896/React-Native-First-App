import AsyncStorage from '@react-native-async-storage/async-storage';

// Set value in  localStorage ...
export const set = async (key, value) => {
  try {
    if (__DEV__) {
      console.log('key and value is: ', key, value);
    }
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
};

//   Get value from local storage ...
export const get = async key => {
  let value = '';
  try {
    value = (await AsyncStorage.getItem(key)) || 'none';
    if (__DEV__) {
      console.log('key and value is: ', key, value);
    }
  } catch (error) {
    // Error retrieving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
  return value;
};

// Set item in local storage  ...
export const setItems = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
};

export const setObject = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
};

export const getObject = async key => {
  let value = {};
  try {
    let obj = (await AsyncStorage.getItem(key)) || undefined;
    value = !!obj ? JSON.parse(obj) : {};
  } catch (error) {
    // Error retrieving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
  return value;
};

export const getItems = async key => {
  let value = [];
  try {
    let items = (await AsyncStorage.getItem(key)) || [];
    value = items.length !== 0 ? JSON.parse(items) : [];
  } catch (error) {
    // Error retrieving data
    if (__DEV__) {
      console.log(error.message);
    }
  }
  return value;
};
