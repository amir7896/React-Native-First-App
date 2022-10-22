import {Api} from '../client/rest';
import {GET_ALL_CAMPS} from '../../constants/apiConstant';

class CampGroundApi {
  static sharedInstance = new CampGroundApi();

  constructor() {
    if (CampGroundApi.sharedInstance !== null) {
      return CampGroundApi.sharedInstance;
    }
  }

  //   Get All Camps
  async getAllCamps() {
    try {
      const response = await Api.get(GET_ALL_CAMPS);
      const {totalRecordCount, data} = response.data;
      return {data, totalRecordCount};
    } catch (err) {
      console.log('Get All Camps api error ===', err);
    }
  }
}

export default CampGroundApi.sharedInstance;
