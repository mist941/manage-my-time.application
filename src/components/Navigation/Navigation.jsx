import React from 'react';
import {View} from 'react-native';
import {NavigationStyles} from './Navigation.styles';
import {Text} from 'react-native';

const Navigation = () => {
  return (
    <View style={NavigationStyles.container}>
      <Text>Footer</Text>
    </View>
  );
};

export default Navigation;