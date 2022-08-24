import React, {useRef} from 'react';
import {View} from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';
import {ColorPickerStyles} from './ColorPicker.styles';
import {colorsList} from '../../../helpers/colorsList';

const ColorPicker = ({selectedColor = '', onChange}) => {
  const scrollPicker = useRef(null);
  const options = Object.entries(colorsList);
  const selectedIndex = options.findIndex(([key]) => key === selectedColor);

  return (
    <ScrollPicker
      ref={scrollPicker}
      dataSource={options}
      selectedIndex={selectedIndex}
      itemHeight={90}
      itemWidth={90}
      wrapperHeight={220}
      wrapperColor='#ffffff'
      highlightColor='#868686'
      renderItem={data => {
        return (
          <View style={ColorPickerStyles.itemWrap}>
            <View style={[ColorPickerStyles.color, {backgroundColor: data[1]}]}/>
          </View>
        )
      }}
      onValueChange={data => onChange(data[0], "color")}
    />
  );
};

export default ColorPicker;