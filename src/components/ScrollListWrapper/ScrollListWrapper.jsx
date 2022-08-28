import React from 'react';
import {ScrollListWrapperStyles} from './ScrollListWrapper.styles';
import {ScrollView, View} from 'react-native';

const ScrollListWrapper = ({children}) => {
  return (
    <ScrollView>
      <View style={ScrollListWrapperStyles.list}>
        {children}
      </View>
    </ScrollView>
  );
};

export default ScrollListWrapper;