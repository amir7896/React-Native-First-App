import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

  // Navigate to about page ...
  const aboutNavigate = () => {
    navigation.push('About')

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is home screen component</Text>
      <Button 
        title="Go To About Page"
        onPress={aboutNavigate}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})