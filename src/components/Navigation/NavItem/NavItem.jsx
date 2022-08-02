import React from 'react';
import {Pressable, View} from 'react-native';
import {NavItemStyles} from './NavItem.styles';
import {useNavigation} from '@react-navigation/native';

const NavItem = ({icon, name, isActive}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(name)}>
      <View style={isActive && NavItemStyles.active}>
        {icon}
      </View>
    </Pressable>
  );
};

export default NavItem;