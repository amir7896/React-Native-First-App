import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {CampList} from './Camps';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to yelpcamp.</Text>
      <CampList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
