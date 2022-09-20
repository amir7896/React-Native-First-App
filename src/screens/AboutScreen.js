import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is about screen component!</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})