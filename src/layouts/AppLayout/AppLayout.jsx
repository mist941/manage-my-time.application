import React from 'react';
import {Pressable, View} from 'react-native';
import {StatusBar, Dimensions, Platform} from 'react-native';
import {AppLayoutStyles} from './AppLayout.styles';
import Navigation from '../../components/Navigation/Navigation/Navigation';

const AppLayout = ({children, outsidePress}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[
      AppLayoutStyles.layout,
      {
        marginTop: StatusBar.currentHeight,
        height: Platform.OS === 'ios' ? '100%' : windowHeight
      }
    ]}>
      {outsidePress && (
        <Pressable onPress={outsidePress} style={AppLayoutStyles.content}>
          {children}
        </Pressable>
      )}
      {!outsidePress && (
        <View style={AppLayoutStyles.content}>
          {children}
        </View>
      )}
      <Navigation/>
    </View>
  );
};

export default AppLayout;