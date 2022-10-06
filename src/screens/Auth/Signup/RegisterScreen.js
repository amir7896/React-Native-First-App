import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import AuthImage from '../../../assets/Images/auth.jpg';
import {useSelector, useDispatch} from 'react-redux';
import AuthApi from '../../../services/Api/AuthApi';
import {
  signupUser,
  userSelector,
  clearState,
} from '../../../features/User/UserSlice';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {height} = useWindowDimensions();
  const [allUsers, setAllUsers] = useState();

  const {isFetching, isSuccess, isError, errorMessage} =
    useSelector(userSelector);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  // on Signup Button Pressed
  const onRegisterPressed = async data => {
    console.log('Form data :::===', data);
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  // UseEffect Get All users

  const getUsers = async () => {
    const result = await AuthApi.getAllUsers();
    setAllUsers(result);
  };

  // All users useEffect

  useEffect(() => {
    getUsers();
  }, []);

  // All users
  // console.log(allUsers);
  // On Success and error  ...
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigation.navigate('StackTab', {screen: 'Home'});
    }
    if (isError) {
      console.warn(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  const onSignInPress = () => {
    navigation.navigate('Auth', {screen: 'Login'});
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>

          <Image
            source={AuthImage}
            style={[styles.logo, {height: height * 0.2}]}
            resizeMode="contain"
          />
          <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            rules={{
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username should be at least 3 characters long',
              },
              maxLength: {
                value: 24,
                message: 'Username should be max 24 characters long',
              },
            }}
          />
          <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
          />
          <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
            }}
          />
          <CustomButton
            text="Register"
            onPress={handleSubmit(onRegisterPressed)}
          />

          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>
              Privacy Policy
            </Text>
          </Text>

          <SocialSignInButtons />

          <CustomButton
            text="Have an account? Sign in"
            onPress={onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;

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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
