import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const SingleTaskStyles = StyleSheet.create({
  wrap: {
    backgroundColor: commonStyles.primaryBackground,
    borderRadius: 12,
    padding: 10,
    width: '100%',
    marginBottom: 15,
    zIndex: -1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  name: {
    fontWeight: '400',
    fontSize: 14,
  },
  date: {
    fontWeight: '400',
    fontSize: 12
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  category: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',
    borderRadius: 5,
  },
  categoryName: {
    color: '#8811FF',
    fontWeight: '400',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    width: 28,
    marginRight: 10,
    height: 28,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});