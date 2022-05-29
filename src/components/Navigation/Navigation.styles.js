import {StyleSheet} from 'react-native';

export const NavigationStyles = StyleSheet.create({
  navigation: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#4D5DFA',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '15%',
    paddingRight: '15%'
  }
});