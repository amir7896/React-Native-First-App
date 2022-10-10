import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LocalStorage} from '../utils';
import {TOKEN, USER} from '../constants/appConstants';
const AboutScreen = () => {
  const [user, setuser] = useState();
  const [token, setToken] = useState();

  const getUser = async () => {
    const User = await LocalStorage.getObject(USER);
    setuser(User);
  };
  const getToken = async () => {
    const Token = await LocalStorage.get(TOKEN);
    setToken(Token);
  };
  useEffect(() => {
    getUser();
    getToken();
  }, []);

  console.log('User Token  ==', token);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>{user?.userId}</Text>
      <Text style={styles.text}>{user?.name}</Text>
      <Text style={styles.text}>{user?.email}</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
