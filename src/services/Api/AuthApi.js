import {Api} from '../client/rest';
import axios from 'axios';
import {GREET_USER, GET_USERS} from '../../constants/apiConstant';

class AuthApi {
  static sharedInstance = new AuthApi();

  constructor() {
    if (AuthApi.sharedInstance != null) {
      return AuthApi.sharedInstance;
    }
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
