import {Button, StyleSheet, Text, View} from 'react-native';
import {USER, TOKEN} from '../constants/appConstants';

import React from 'react';
import {LocalStorage} from '../utils';
const AboutScreen = () => {
  // const token = await LocalStorage.get(TOKEN);
  // console.log('Token is About Screen  ===', token);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is about screen component!</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
