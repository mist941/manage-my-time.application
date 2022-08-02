import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const NavItemStyles = StyleSheet.create({
  active: {
    backgroundColor: commonStyles.primaryOpacityBackground,
    borderRadius: 4,
    padding: 1,
  }
});