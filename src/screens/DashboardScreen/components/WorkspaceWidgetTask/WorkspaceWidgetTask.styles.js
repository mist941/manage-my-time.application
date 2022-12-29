import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const WorkspaceWidgetTaskStyles = StyleSheet.create({
  taskWrap: {
    backgroundColor: '#E0DFE585',
    borderColor: '#D3B8E7',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
    width: '84%',
    position: 'absolute',
    right: 10,
    zIndex: 2,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between'
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
    fontSize: 12
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginRight: 5
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#D3B8E7',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  rightBtn: {
    marginLeft: 10
  }
});