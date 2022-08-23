import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';

const ColorPicker = ({selectedIndex = 0, value, onChange}) => {
  const scrollPicker = useRef(null);

  return (
    <ScrollPicker
      ref={scrollPicker}
      dataSource={}
      selectedIndex={selectedIndex}
      itemHeight={50}
      itemWidth={50}
      wrapperHeight={250}
      wrapperColor='#ffffff'
      highlightColor='#d8d8d8'
      renderItem={(data, index, isSelected) => {
        return (
          <View style={{width: 50}}>
            <Text>{data}</Text>
          </View>
        )
      }}
      onValueChange={(data, selectedIndex) => {

      }}
    />
  );
};

export default ColorPicker;