import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const PageHeaderStyles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  text: {
    color: commonStyles.textColor,
    fontWeight: '700',
    fontSize: 23,
  }
});