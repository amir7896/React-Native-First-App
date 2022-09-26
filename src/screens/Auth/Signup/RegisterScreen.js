import React from 'react';
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

import {Controller, useForm} from 'react-hook-form';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  // Navigate To Signin Screen ..
  const loginNavigation = () => {
    navigation.goBack();
  };

  // on Signup Button Pressed
  const onsingupPressed = data => {
    console.log('data ===', data);
    console.log('singup button pressed!');
  };

  return (
    <>
      <SafeAreaView>
        <Text style={styles.text}>Create An Account</Text>
        <Controller
          control={control}
          name="username"
          rules={{required: 'Username is required'}}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
              <TextInput
                style={[styles.input, {borderColor: error ? 'red' : '#e8e8e8'}]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Enter Username"
              />
              <View>
                {error && (
                  <Text style={{color: 'red', alignSelf: 'stretch'}}>
                    {error.message || 'Error'}
                  </Text>
                )}
              </View>
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{required: 'Email is required'}}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
              <TextInput
                style={[styles.input, {borderColor: error ? 'red' : '#e8e8e8'}]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Enter Email"
              />
              <View>
                {error && (
                  <Text style={{color: 'red', alignSelf: 'stretch'}}>
                    {error.message || 'Error'}
                  </Text>
                )}
              </View>
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password should be minimum 5 characters',
            },
          }}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, {borderColor: error ? 'red' : '#e8e8e8'}]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Enter Password"
              />
              <View>
                {error && (
                  <Text style={{color: 'red', alignSelf: 'stretch'}}>
                    {error.message || 'Error'}
                  </Text>
                )}
              </View>
            </>
          )}
        />

        <TouchableOpacity
          style={styles.loginOpacity}
          onPress={handleSubmit(onsingupPressed)}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerOpacity}
          onPress={loginNavigation}>
          <Text style={styles.textButton}> Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  text: {
    color: '#355C7D',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    borderColor: '#e8e8e8',
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
