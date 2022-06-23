import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const CurrentDayWidgetStyles = StyleSheet.create({
  widgetWrap: {
    width: '95%',
    height: 540,
    marginTop: 15,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
    alignItems: 'center',
    ...commonStyles.primaryShadow,
  },
  content: {
    width: '100%'
  },
  hour: {
    color: commonStyles.primaryTextColor,
    paddingTop: 5,
    paddingBottom: 5
  },
  days: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    paddingBottom: 5
  },
  dayWrap: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: commonStyles.secondaryBackground,
    height: 30,
    width: 30,
    borderRadius: 100,
    opacity: 0.5
  },
  currentDay: {
    opacity: 0.7,
    width: 40,
    height: 40
  },
  day: {
    color: commonStyles.secondaryTextColor,
    fontSize: 8,
    textAlign: 'center',
  },
  currentDayText: {
    fontSize: 10
  }
});
