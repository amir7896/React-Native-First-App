import {Api} from '../client/rest';
import {LocalStorage} from '../../utils/index';
import {USER, TOKEN} from '../../constants/appConstants';
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
    const response = await Api.post(SIGNUP_USER, body);
    return response.data;
  }
  // SignIn User ....
  async singInUser(body) {
    try {
      const response = await Api.post(SIGN_IN_USER, body);
      const token = response.data.token;
      const user = response.data.User;
      console.log('token ===', token);
      console.log('user  ===', user);
      await LocalStorage.setObject(USER, user);
      await LocalStorage.setObject(TOKEN, token);
      return response.data;
    } catch (error) {
      console.log('login error ===', error);
    }
  }
  // Logout user  ...

  async logout() {
    await AsyncStorage.removeItem('user');
  }

  // Get user from storage  ...
  async user() {
    return await AsyncStorage.getItem('user');
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
