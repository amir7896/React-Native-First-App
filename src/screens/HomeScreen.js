import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is home screen component</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
