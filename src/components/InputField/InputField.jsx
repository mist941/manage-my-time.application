import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {InputFieldStyles} from './InputField.styles';
import commonStyles from '../../common.styles';

const InputField = (
  {
    placeholder = "",
    label = "",
    value = "",
    styles,
    onChange,
  }
) => {
  return (
    <View style={[InputFieldStyles.fieldWrap, styles]}>
      <View style={InputFieldStyles.label}>
        <Text style={InputFieldStyles.labelText}>{label}</Text>
      </View>
      <TextInput
        value={value}
        placeholderTextColor={commonStyles.placeholderColor}
        placeholder={placeholder}
        onChangeText={onChange}
        style={InputFieldStyles.field}
      />
    </View>
  );
};

export default InputField;