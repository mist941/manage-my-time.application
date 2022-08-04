import {StyleSheet} from 'react-native';
import commonStyles from '../../../common.styles';

export const SingleCategoryStyles = StyleSheet.create({
  wrap: {
    backgroundColor: 'rgba(136, 17, 255, 0.1)',
    height: 50,
    width: '47%',
    borderRadius: 14,
    marginBottom: 18,
  },
  animateWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
  },
  deleteBtn: {
    backgroundColor: '#E0DFE5',
    borderColor: commonStyles.secondaryBackground,
    borderWidth: 1,
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    right: -5,
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
    fontSize: 14,
  }
});