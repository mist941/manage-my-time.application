import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const CategoriesHeaderStyles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  text: {
    color: commonStyles.textColor,
    fontWeight: '700',
    fontSize: 23,
  }
});