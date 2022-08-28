import React from 'react';
import {Text, View} from 'react-native';
import {PageHeaderStyles} from './PageHeader.styles';

const PageHeader = ({count, name}) => {
  return (
    <View style={PageHeaderStyles.wrap}>
      <Text style={PageHeaderStyles.text}>{name}</Text>
      <Text style={PageHeaderStyles.text}>{count}</Text>
    </View>
  );
};

export default PageHeader;