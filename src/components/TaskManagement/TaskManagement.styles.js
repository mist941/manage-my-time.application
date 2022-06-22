import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const TaskManagementStyles = StyleSheet.create({
  taskManagementWrap: {
    width: '95%',
    height: 90,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    ...commonStyles.primaryShadow,
  }
});