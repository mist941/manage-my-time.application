import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const LoginBannerStyles = StyleSheet.create({
  loginBackground: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 50,
    height: 400
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: commonStyles.secondaryTextColor,
    marginBottom: 10,
    paddingRight: 35,
    paddingLeft: 35,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    color: commonStyles.secondaryTextColor,
    paddingRight: 35,
    paddingLeft: 35,
  }
});