import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const SidebarDrawerStyles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: [{translateX: 500}],
    backgroundColor: commonStyles.backgroundApp,
  },
});