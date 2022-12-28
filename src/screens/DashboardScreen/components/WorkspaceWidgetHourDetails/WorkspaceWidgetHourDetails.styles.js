import {StyleSheet} from 'react-native';

export const WorkspaceWidgetHourDetailsStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  flatListWrap: {
    flex: 1,
    width: '100%',
  },
  flatListContainer: {
    flexGrow: 1,
  }
});