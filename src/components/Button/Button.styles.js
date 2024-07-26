import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const ButtonStyles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 8
  },
  form: {
    ...commonStyles.primaryShadow,
    backgroundColor: commonStyles.secondaryBackground,
    height: 'auto',
    paddingVertical: 14,
    padding: 30
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
  date_picker: {
    borderStyle: 'solid',
    borderColor: '#EFEFEF',
    borderWidth: 2,
    borderRadius: 10,
    height: 40
  },
  buttonText: {
    fontSize: 16,
  },
  textPrimary: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  textForm: {
    color: '#fff',
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