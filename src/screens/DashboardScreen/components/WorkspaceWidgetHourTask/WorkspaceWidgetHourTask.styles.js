import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const WorkspaceWidgetHourTaskStyles = StyleSheet.create({
  wrap: {
    backgroundColor: commonStyles.backgroundApp,
    borderRadius: 12,
    padding: 10,
    width: '100%',
    marginBottom: 15,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  completed: {
    borderColor: 'rgba(56, 196, 21, 0.4)',
    borderWidth: 2
  },
  closed: {
    borderColor: commonStyles.errColor,
    borderWidth: 2
  },
  name: {
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 10
  },
  date: {
    fontSize: 12,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#D3B8E7',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  rightBtn: {
    marginLeft: 10
  }
});