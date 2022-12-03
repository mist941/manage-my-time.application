import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {InputFieldStyles} from './InputField.styles';
import commonStyles from '../../common.styles';
import Error from '../Error/Error';

const InputField = (
  {
    placeholder = "",
    label = "",
    value = "",
    styles,
    onChange,
    error
  }
) => {
  return (
    <View style={[InputFieldStyles.fieldWrap, styles]}>
      <View style={InputFieldStyles.label}>
        <Text style={[InputFieldStyles.labelText, error && InputFieldStyles.errText]}>{label}</Text>
      </View>
      <TextInput
        value={value}
        placeholderTextColor={commonStyles.placeholderColor}
        placeholder={placeholder}
        onChangeText={onChange}
        style={[InputFieldStyles.field, error && InputFieldStyles.fieldErr]}
      />
      {error && <Error error={error}/>}
    </View>
  );
};

export default InputField;