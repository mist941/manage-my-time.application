import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const NavigationStyles = StyleSheet.create({
  navigation: {
    width: '80%',
    backgroundColor: commonStyles.primaryBackground,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 7,
    ...commonStyles.primaryShadow
  }
});