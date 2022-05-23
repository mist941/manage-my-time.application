import React from 'react';
import {View} from 'react-native';
import {DividerStyles} from "./Divider.styles";

const Divider = ({orientation = 'horizontal', width = '100%', height = '100%'}) => {
  return <View style={{...DividerStyles.divider, ...DividerStyles[orientation], width, height}}/>;
};

export default Divider;