import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const SelectFieldStyles = StyleSheet.create({
  fieldWrap: {
    position: 'relative',
    width: '100%'
  },
  label: {
    position: 'absolute',
    backgroundColor: commonStyles.primaryBackground,
    top: -10,
    left: 15,
    zIndex: 1
  },
  labelText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#333333',
    paddingHorizontal: 4
  },
  selectField: {
    viewContainer: {
      borderWidth: 2,
      borderColor: '#EFEFEF',
      borderRadius: 10,
      width: '100%'
    },
    inputAndroid: {
      padding: 0,
      fontSize: 16,
      margin: 0,
    }
  }
});