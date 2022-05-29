import React from 'react';
import {View} from 'react-native';
import {NavigationStyles} from './Navigation.styles';
import NavItem from '../NavItem/NavItem';
import {screens} from '../../router/screens';

const Navigation = ({currentRoute, navigation}) => {

  return (
    <View style={NavigationStyles.navigation}>
      <NavItem
        name={screens.tasks}
        isActive={currentRoute === screens.tasks}
        navigation={navigation}
      />
      <NavItem
        name={screens.dashboard}
        isActive={currentRoute === screens.dashboard}
        navigation={navigation}
      />
      <NavItem
        name={screens.categories}
        isActive={currentRoute === screens.categories}
        navigation={navigation}
      />
    </View>
  );
};

export default Navigation;