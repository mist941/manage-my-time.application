import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../CustomButton/CustomButton';
import {CustomDatePickerStyles} from './CustomDatePicker.styles';
import moment from 'moment';

const CustomDatePicker = ({value, onChange, label}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={CustomDatePickerStyles.container}>
      <CustomButton
        type='date_picker'
        text={moment(value).format('HH:mm')}
        onPress={() => setOpen(true)}
      />
      {open && (
        <DateTimePicker
          mode="time"
          value={new Date(value)}
          onChange={date => {
            setOpen(false);
            onChange(date);
          }}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;