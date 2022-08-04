import React from 'react';
import {Text, View} from 'react-native';
import {CategoriesHeaderStyles} from './CategoriesHeader.styles';

const CategoriesHeader = ({count}) => {
  return (
    <View style={CategoriesHeaderStyles.wrap}>
      <Text style={CategoriesHeaderStyles.text}>Categories</Text>
      <Text style={CategoriesHeaderStyles.text}>{count}</Text>
    </View>
  );
};

export default CategoriesHeader;