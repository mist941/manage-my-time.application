import React, {useEffect, useRef} from 'react';
import {SidebarDrawerStyles} from './SidebarDrawer.styles';
import {Animated, Dimensions, Easing} from 'react-native';

const SidebarDrawer = ({children, isOpen, onClose}) => {
  const windowWidth = Dimensions.get('window').width;
  const animateOffset = useRef(new Animated.Value(windowWidth)).current;

  useEffect(() => {
    console.log(isOpen)
    if (isOpen) {
      Animated.timing(
        animateOffset,
        {
          toValue: 0,
        }
      ).start();
    }
  }, [isOpen]);

  return (
    <Animated.View style={[SidebarDrawerStyles.drawer, {transform: [{translateX: animateOffset}]}]}>
      {children}
    </Animated.View>
  );
};

export default SidebarDrawer;