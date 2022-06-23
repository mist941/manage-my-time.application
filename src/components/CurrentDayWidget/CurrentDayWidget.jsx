import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import Divider from '../Divider/Divider';
import {CurrentDayWidgetStyles} from './CurrentDayWidget.styles';
import {getTimeSpan} from '../../helpers/getTimeSpan';

const currentDate = new Date();

const CurrentDayWidget = () => {
  const [days, setDays] = useState(getTimeSpan(currentDate));

  return (
    <View style={CurrentDayWidgetStyles.widgetWrap}>
      <View style={CurrentDayWidgetStyles.days}>
        {days.map((day, index) => (
          <Pressable key={index} style={CurrentDayWidgetStyles.day}>
            <Text>{day.label}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView>
        {Array.from(Array(24)).map((_, index) => {
          return (
            <View>
              <Text style={CurrentDayWidgetStyles.hour}>{index} h</Text>
              {index !== 23 && <Divider key={index} height={1}/>}
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default CurrentDayWidget;