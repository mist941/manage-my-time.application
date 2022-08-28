import {StyleSheet} from 'react-native';

export const ColorPickerStyles = StyleSheet.create({
  itemWrap: {
    width: 90,
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    width: '90%',
    height: '90%',
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: '#d8d8d8',
    borderWidth: 1
  }
});