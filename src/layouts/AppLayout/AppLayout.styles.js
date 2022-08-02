import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const AppLayoutStyles = StyleSheet.create({
  layout: {
    backgroundColor: commonStyles.backgroundApp,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
});