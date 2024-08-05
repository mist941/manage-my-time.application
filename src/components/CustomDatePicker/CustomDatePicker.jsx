import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../Button/Button';
import moment from 'moment';

const CustomDatePicker = (
  {
    value,
    onChange,
    visibleType,
    mode = "time",
    width = "45%"
  }
) => {
  const [open, setOpen] = useState(false);
  let result = moment(value).format('HH:mm');

  if (visibleType === "day") result = moment(value).format('MMMM Do YYYY');
  if (!value) result = 'Select date';

  return (
    <View style={{width}}>
      <CustomButton
        type='date_picker'
        text={result}
        onPress={() => setOpen(true)}
      />
      {open && (
        <DateTimePicker
          mode={mode}
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