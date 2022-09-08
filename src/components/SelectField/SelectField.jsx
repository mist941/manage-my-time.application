import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import commonStyles from '../../common.styles';
import {Text, View} from 'react-native';
import {SelectFieldStyles} from './SelectField.styles';

const SelectField = (
  {
    placeholder = "",
    label = "",
    options = [],
    styles,
    onChange,
    value
  }
) => {

  return (
    <View style={[SelectFieldStyles.fieldWrap, styles]}>
      <View style={SelectFieldStyles.label}>
        <Text style={SelectFieldStyles.labelText}>{label}</Text>
      </View>
      <RNPickerSelect
        onValueChange={onChange}
        value={value}
        style={SelectFieldStyles.selectField}
        placeholder={{label: placeholder, color: commonStyles.placeholderColor}}
        items={options}
      />
    </View>
  );
};

export default SelectField;