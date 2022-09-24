import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';

const LoginScreen = () => {
  const navigation = useNavigation();

  // Navigate To Singup Screen ..
  const singUpNavigate = () => {
    navigation.navigate('Auth', {screen: 'Register'});
  };
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView>
      <Text style={styles.text}>Login Page</Text>
      <TextInput style={styles.input} placeholder="Enter Email" name="email" />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter Password"
        name="password"
      />
      <TouchableOpacity
        style={styles.loginOpacity}
        onPress={() => alert('button press')}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerText}>
        <Text style={styles.registerText}>OR NOT HAVE AN ACCOUNT ?</Text>
      </View>
      <TouchableOpacity style={styles.registerOpacity} onPress={singUpNavigate}>
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    color: '#355C7D',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textButton: {
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  loginOpacity: {
    marginVertical: 20,
    alignItems: 'center',
    width: 150,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#344F92',
    marginHorizontal: 100,
    borderRadius: 5,
  },
  registerOpacity: {
    marginVertical: 10,
    alignItems: 'center',
    width: 150,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#454B62',
    marginHorizontal: 100,
    borderRadius: 5,
  },
  registerText: {
    textAlign: 'center',
    marginLeft: 40,
  },
  registerText: {
    fontSize: 15,
    color: '#636363',
  },
});

// font_14_500: {color: theme.palette.primary, fontSize: 14, fontWeight: '500'},
