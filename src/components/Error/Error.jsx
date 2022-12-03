import React from 'react';
import {ErrorStyles} from './Error.styles';
import {Text, View} from 'react-native';

const Error = ({error}) => {
  return (
    <View>
      <Text style={ErrorStyles.errText}>{error}</Text>
    </View>
  );
};

export default Error;