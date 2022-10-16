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
    paddingRight: 10,
  },
  content: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  }
});