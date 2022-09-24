import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.palette.white,
  },

  keyBoardScrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  imageContainer: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  inputsContainer: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialContainer: {flex: 0.2, width: '100%', alignItems: 'center'},

  font_14_300: {color: 'black', fontSize: 14, fontWeight: '300'},
  font_14_400: {color: 'black', fontSize: 14, fontWeight: '400'},
  font_14_500: {color: theme.palette.primary, fontSize: 14, fontWeight: '500'},
  font_12_400: {color: 'black', fontSize: 12, fontWeight: '400'},

  headerText: {
    fontSize: 24,
    alignSelf: 'flex-start',
    // marginVertical: 15,
  },
  logo: {width: '60%'},

  socialButton: {
    borderColor: theme.palette.borderGray,
    width: 90,
    padding: 0,
    height: 32,
  },
  socialButtonText: {
    fontSize: 12,
    fontWeight: '300',
    color: theme.palette.black,
  },
  socialButtonIcon: {
    height: 13,
  },

  icon: {height: '80%', marginTop: 2},
  footer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
