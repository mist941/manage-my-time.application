import {StyleSheet} from 'react-native';

export const AppFilterStyles = StyleSheet.create({
  filterWrap: {
    position: 'relative',
    width: '100%',
    marginBottom: 15,
  },
  filterContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  filterBtn: {
    padding: 5,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15
  }
});