import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Divider from '../Divider/Divider';
import {CurrentDayWidgetStyles} from './CurrentDayWidget.styles';

const CurrentDayWidget = () => {
  return (
    <View style={CurrentDayWidgetStyles.widgetWrap}>
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