import React, {useRef} from 'react';
import {View} from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';
import {IconPickerStyles} from './IconPicker.styles';
import {iconsList} from '../../../helpers/iconsList';
import {Ionicons} from '@expo/vector-icons';

const IconPicker = ({selectedIcon = '', onChange}) => {
  const scrollPicker = useRef(null);
  const selectedIndex = iconsList.findIndex(icon => icon === selectedIcon);

  return (
    <ScrollPicker
      ref={scrollPicker}
      dataSource={iconsList}
      selectedIndex={selectedIndex}
      itemHeight={90}
      itemWidth={90}
      wrapperHeight={220}
      wrapperColor='#ffffff'
      highlightColor='#868686'
      renderItem={data => {
        return (
          <View style={IconPickerStyles.itemWrap}>
            <Ionicons name={data} size={40} color="#868686"/>
          </View>
        )
      }}
      onValueChange={data => onChange(data, "icon")}
    />
  );
};

export default IconPicker;