import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const CurrentDayWidgetStyles = StyleSheet.create({
  widgetWrap: {
    width: '95%',
    height: 500,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
    ...commonStyles.primaryShadow,
  },
  hour: {
    color: commonStyles.primaryTextColor,
    paddingTop: 5,
    paddingBottom: 5
  }
});
