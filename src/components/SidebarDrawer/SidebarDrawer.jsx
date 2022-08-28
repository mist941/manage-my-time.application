import React from 'react';
import {SidebarDrawerStyles} from './SidebarDrawer.styles';
import {View, Animated} from 'react-native';

const SidebarDrawer = ({children, isOpen, onClose}) => {
  return (
    <Animated.View style={SidebarDrawerStyles.drawer}>
      {children}
    </Animated.View>
  );
};

export default SidebarDrawer;