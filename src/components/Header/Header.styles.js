import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const HeaderStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 70,
    width: '95%',
    backgroundColor: commonStyles.primaryBackground,
    borderRadius: 20,
    ...commonStyles.primaryShadow,
  },
});