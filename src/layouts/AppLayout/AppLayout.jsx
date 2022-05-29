import React from 'react';
import {View, Text} from 'react-native';
import Navigation from '../../components/Navigation/Navigation';
import {StatusBar, Dimensions} from 'react-native';
import {AppLayoutStyles} from './AppLayout.styles';

const AppLayout = ({children, header, currentRoute}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[
      AppLayoutStyles.container,
      {
        marginTop: StatusBar.currentHeight,
        height: windowHeight
      }
    ]}>
      <View><Text>Header</Text></View>
      <View><Text>Content</Text></View>
      <Navigation/>
    </View>
  );
};

export default AppLayout;