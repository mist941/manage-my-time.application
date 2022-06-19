import React from 'react';
import {Text, View} from 'react-native';
import Divider from '../Divider/Divider';
import {CurrentDayWidgetStyles} from './CurrentDayWidget.styles';

const CurrentDayWidget = () => {
  return (
    <View style={CurrentDayWidgetStyles.widgetWrap}>
      {Array.from(Array(24)).map((_, index) => {
        return (
          <View>
            <Text>{index}</Text>
            {index !== 23 && <Divider key={index} height={1}/>}
          </View>
        )
      })}
    </View>
  );
};

export default CurrentDayWidget;