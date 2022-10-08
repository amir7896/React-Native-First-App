import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import AuthApi from '../services/Api/AuthApi';

let user = AuthApi.user();

const AboutScreen = () => {
  console.log('user ===', user);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is about screen component!</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
