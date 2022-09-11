import React from 'react';
import {View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const DayPicker = ({styles, onChange, value}) => {
  return (
    <View style={styles}>
      <CalendarStrip
        value={value}
        calendarAnimation={{type: 'sequence', duration: 30}}
        onDateSelected={onChange}
        style={{height: 70, width: 320}}
        datesBlacklist={[value]}
      />
    </View>
  );
};

export default DayPicker;