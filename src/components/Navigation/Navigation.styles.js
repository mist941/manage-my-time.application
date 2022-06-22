import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const NavigationStyles = StyleSheet.create({
  navigation: {
    width: '100%',
    height: 55,
    backgroundColor: commonStyles.primaryBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '15%',
    paddingRight: '15%',
    ...commonStyles.primaryShadow
  }
});