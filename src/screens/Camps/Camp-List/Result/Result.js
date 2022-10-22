import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Result = ({totalRecordCount, camps}) => {
  return (
    <View>
      <Text>Result on getting all camps .</Text>
      <Text>Total CampGrounds are : {totalRecordCount}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
