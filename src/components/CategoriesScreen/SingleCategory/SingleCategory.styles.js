import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const SingleCategoryStyles = StyleSheet.create({
  wrap: {
    backgroundColor: 'rgba(136, 17, 255, 0.1)',
    height: 50,
    width: '100%',
    borderRadius: 14,
    marginBottom: 18,
  },
  animateWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  deleteBtn: {
    borderColor: commonStyles.secondaryBackground,
    borderWidth: 1,
    borderRadius: 20,
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 12,
    right: 10,
  },
  color: {
    width: 50,
    height: '100%',
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  text: {
    color: commonStyles.textColor,
    fontWeight: '400',
    width: '50%',
    fontSize: 14,
  },
  pickers: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between'
  },
  spacePickers: {
    width: '15%',
    height: '100%'
  }
});