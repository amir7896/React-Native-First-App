import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabDefault: 49,
  tabSmall: 32,
};

export default metrics;
