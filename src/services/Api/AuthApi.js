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
    const response = await Api.post(SIGN_IN_USER, body);
    if (response.data) {
      const token = response.data.token;
      const user = response.data.User;
      await LocalStorage.setObject(USER, user);
      await LocalStorage.set(TOKEN, token);
    }
    return response.data;
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
