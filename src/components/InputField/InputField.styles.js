import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const InputFieldStyles = StyleSheet.create({
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
  field: {
    borderWidth: 2,
    borderColor: '#EFEFEF',
    borderRadius: 10,
    padding: 13,
    width: '100%',
    fontSize: 16
  },
  errText: {
    color: commonStyles.errColor,
  },
  fieldErr:{
    borderColor: commonStyles.errColor,
  }

});