import React from 'react';
import {View} from 'react-native';
import Navigation from '../../components/Navigation/Navigation';
import {StatusBar, Dimensions} from 'react-native';
import {AppLayoutStyles} from './AppLayout.styles';
import Header from '../../components/Header/Header';

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
      <Header/>
      {children}
      <Navigation currentRoute={currentRoute} navigation={navigation}/>
    </View>
  );
};

export default AppLayout;