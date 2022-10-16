import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {WorkspaceWidgetStyles} from "./WorkspaceWidget.styles";

const WorkspaceWidget = ({tasks}) => {
  const [currentHourFullView, setCurrentHourFullView] = useState(null);
  const hours = Array.from(Array(24));

  const updateFullView = hour => {
    if (currentHourFullView === hour) setCurrentHourFullView(null);
    setCurrentHourFullView(hour);
  }

  return (
    <View style={WorkspaceWidgetStyles.widgetWrap}>
      {currentHourFullView !== null && (
        <Text>
          {currentHourFullView}
        </Text>
      )}
      {currentHourFullView === null && (
        <ScrollView>
          {hours.map((_, index) => {
            if (index <= 12) return (
              <Pressable key={index} style={[WorkspaceWidgetStyles.hourSector]} onPress={() => updateFullView(index)}>
                {index !== 0 && <View style={WorkspaceWidgetStyles.line}></View>}
                <Text style={WorkspaceWidgetStyles.hour}>{index} AM</Text>
              </Pressable>
            );
            return (
              <Pressable key={index} style={WorkspaceWidgetStyles.hourSector} onPress={() => updateFullView(index)}>
                <View style={WorkspaceWidgetStyles.line}></View>
                <Text style={WorkspaceWidgetStyles.hour}>{index} PM</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default WorkspaceWidget;