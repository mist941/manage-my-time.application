import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const NavItemStyles = StyleSheet.create({
  navItemLine: {
    height: 5,
    width: '100%',
    marginBottom: 7,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  navItemName: {
    fontWeight: '600',
    fontSize: 16,
    color: commonStyles.primaryTextColor
  }
});