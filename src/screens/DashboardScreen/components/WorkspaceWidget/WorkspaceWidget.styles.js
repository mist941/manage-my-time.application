import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const WorkspaceWidgetStyles = StyleSheet.create({
  widgetWrap: {
    flex: 1,
    backgroundColor: commonStyles.primaryBackground,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
  },
  hourSector: {
    height: 50
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EFEFEF'
  },
  hour: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: '400'
  }
});