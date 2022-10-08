import {Api} from '../client/rest';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  GET_USERS,
  SIGNUP_USER,
  SIGN_IN_USER,
} from '../../constants/apiConstant';

class AuthApi {
  static sharedInstance = new AuthApi();

  constructor() {
    if (AuthApi.sharedInstance != null) {
      return AuthApi.sharedInstance;
    }
  }

  // Register User ....
  async resgisterUser(body) {
    try {
      const response = await Api.post(SIGNUP_USER, body);
      console.log('Register User Response  ===', response.data);
      if (response.data) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
      }
      return response.data;
      // const {success, data, message} = response.data;
      // console.log('all users ===', data);
      // if (success) {
      //   return {data, message};
      // } else {
      //   return console.log('error');
      // }
    } catch (error) {
      console.log(`User Register Error ===`, error);
    }
  }
  // SignIn User ....
  async singInUser(body) {
    try {
      const response = await Api.post(SIGN_IN_USER, body);
      const {success, data, message} = response.data;
      console.log('all users ===', data);
      if (success) {
        return {data, message};
      } else {
        return console.log('error');
      }
    } catch (error) {
      console.log(`Sign In  Error ===`, error);
    }
  }
  // Logout user  ...

  async logout() {
    await AsyncStorage.removeItem('user');
  }

  // Get user from storage  ...
  async user() {
    await AsyncStorage.getItem('user');
  }
  // Get all users  ..
  async getAllUsers() {
    try {
      const response = await Api.get(GET_USERS);
      const {success, data, totalRecordCount} = response.data;
      console.log('all users ===', data);
      if (success) {
        return data;
      } else {
        return console.log('error');
      }
    } catch (err) {
      console.log('get user api error ==', err);
    }
  }
}

export default AuthApi.sharedInstance;
