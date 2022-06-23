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
          <Pressable
            key={index}
            style={[
              CurrentDayWidgetStyles.dayWrap,
              index === 1 && CurrentDayWidgetStyles.currentDay
            ]}
          >
            <Text style={[
              CurrentDayWidgetStyles.day,
              index === 1 && CurrentDayWidgetStyles.currentDayText
            ]}
            >
              {day.label}
            </Text>
          </Pressable>
        ))}
      </View>
      <ScrollView style={CurrentDayWidgetStyles.content}>
        {Array.from(Array(24)).map((_, index) => {
          return (
            <View>
              <Text style={CurrentDayWidgetStyles.hour}>{index} {index <= 12 ? 'AM' : 'PM'}</Text>
              {index !== 23 && <Divider key={index} height={1}/>}
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default CurrentDayWidget;