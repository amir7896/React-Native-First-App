import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import axios from 'axios';

import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useForm, Controller} from 'react-hook-form';
import LoginImage from '../../../assets/Images/login1.jpg';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // Navigate To Singup Screen ..
  const onSignUpPress = () => {
    navigation.navigate('Auth', {screen: 'Register'});
  };

  // SignIn Button Press ..
  const onSignInPressed = async data => {
    console.log('data ===', data);
    const {email, password} = data;
  };

  const greetUser = () => {
    try {
      let response = axios
        .get('http://localhost:5000/api/auth/greet')
        .then(data => {
          console.log('api response data ', data);
        })
        .catch(err => {
          console.log('api response error :', err);
        });
    } catch (error) {
      console.log(`Error in greet user :: ${error}`);
    }
  };

  // Get Data from backend ...
  useEffect(() => {
    greetUser();
  }, []);

  // Forgot Password Pressed  ..
  const onForgotPasswordPressed = () => {
    console.warn('Forgot password pressed');

    //navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Login </Text>

        <Image
          source={LoginImage}
          style={[styles.logo, {height: height * 0.2}]}
          resizeMode="contain"
        />

        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  logo: {
    width: '100%',
    maxWidth: 400,
    maxHeight: 200,
  },
});

// font_14_500: {color: theme.palette.primary, fontSize: 14, fontWeight: '500'},
