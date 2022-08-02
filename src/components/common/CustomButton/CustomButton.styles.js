import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const CustomButtonStyles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 8
  },
  primary: {
    backgroundColor: commonStyles.secondaryBackground,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondary: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#999999',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 16,
  },
  textPrimary: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  textSecondary: {
    color: '#000',
    fontWeight: '700'
  },
  icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 20
  },
  withIcon: {
    position: 'relative'
  }
});