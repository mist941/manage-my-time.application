import React from 'react';
import {View, Text} from 'react-native';
import Navigation from '../../components/Navigation/Navigation';
import {StatusBar, Dimensions} from 'react-native';
import {AppLayoutStyles} from './AppLayout.styles';

const AppLayout = ({children, currentRoute, navigation}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[
      AppLayoutStyles.layout,
      {
        marginTop: StatusBar.currentHeight,
        height: windowHeight
      }
    ]}>
      <View><Text>Header</Text></View>
      {children}
      <Navigation currentRoute={currentRoute} navigation={navigation}/>
    </View>
  );
};

export default AppLayout;