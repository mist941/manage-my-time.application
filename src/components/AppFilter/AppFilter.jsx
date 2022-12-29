import React, {useRef} from 'react';
import {Pressable, Text, View} from 'react-native';
import {AppFilterStyles} from './AppFilter.styles';
import BottomSheet from '../BottomSheet/BottomSheet';
import {SelectFieldStyles} from '../SelectField/SelectField.styles';
import commonStyles from '../../common.styles';
import RNPickerSelect from 'react-native-picker-select';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

const AppFilter = ({params, setParams, clearParams, categories}) => {
  const RBSheetRef = useRef();

  const openFilter = () => RBSheetRef.current.open();

  return (
    <View style={AppFilterStyles.filterWrap}>
      <View style={AppFilterStyles.filterContent}>
        <Pressable style={AppFilterStyles.filterBtn} onPress={openFilter}>
          <Text>Change filter</Text>
        </Pressable>
        <Pressable style={AppFilterStyles.filterBtn} onPress={clearParams}>
          <Text>Clear filter</Text>
        </Pressable>
      </View>
      <BottomSheet height={200} ref={RBSheetRef}>
        <RNPickerSelect
          onValueChange={value => setParams('category', value)}
          value={params.category}
          style={SelectFieldStyles.selectField}
          placeholder={{label: 'Select category', color: commonStyles.placeholderColor}}
          items={categories}
        />
        <View style={AppFilterStyles.group}>
          <CustomDatePicker
            value={params.startDate}
            onChange={date => setParams('startDate', new Date(date.nativeEvent.timestamp))}
            visibleType='day'
            width='45%'
            mode='date'
          />
          <CustomDatePicker
            value={params.endDate}
            onChange={date => setParams('endDate', new Date(date.nativeEvent.timestamp))}
            visibleType='day'
            width='45%'
            mode='date'
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default AppFilter;