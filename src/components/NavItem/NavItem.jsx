import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NavItemStyles} from './NavItem.styles';

const NavItem = ({name, isActive, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate(name)}>
      <View style={[NavItemStyles.navItemLine, isActive && {backgroundColor: '#4D5DFA'}]}/>
      <Text style={[NavItemStyles.navItemName, isActive && {color: '#4D5DFA'}]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default NavItem;