import React from 'react';
import {View} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import {AppLayoutStyles} from './AppLayout.styles';
import Navigation from '../../components/Navigation/Navigation/Navigation';

const AppLayout = ({children}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[
      AppLayoutStyles.layout,
      {
        marginTop: StatusBar.currentHeight,
        height: windowHeight
      }
    ]}>
      <View>
        {children}
      </View>
      <Navigation/>
    </View>
  );
};

export default AppLayout;