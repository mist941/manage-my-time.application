import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {WorkspaceWidgetHoursStyles} from './WorkspaceWidgetHours.styles';
import {Ionicons} from '@expo/vector-icons';
import WorkspaceWidgetTask from '../WorkspaceWidgetTask/WorkspaceWidgetTask';
import {getMinutesFromStartDay} from '../../../../helpers/getMinutesFromStartDay';
import moment from 'moment';

const WorkspaceWidgetHours = ({updateFullView, tasks, selectedDate}) => {
  const hours = Array.from(Array(24));
  const minuteInPx = ((50 * 24) / (24 * 60)).toFixed(3);
  const isToday = moment(selectedDate).isSame(new Date(), "day");
  const [currentDatePosition, setCurrentDatePosition] = useState(getMinutesFromStartDay(new Date()) * minuteInPx)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDatePosition(getMinutesFromStartDay(new Date()) * minuteInPx)
    }, 1000 * 60);

    return () => clearInterval(interval);

  }, [])

  return (
    <ScrollView>
      {isToday && (
        <View style={[WorkspaceWidgetHoursStyles.currentTimeLine, {top: currentDatePosition}]}>
          <View style={WorkspaceWidgetHoursStyles.circle}/>
        </View>
      )}
      <View style={WorkspaceWidgetHoursStyles.container}>
        {tasks.map(task => (
          <WorkspaceWidgetTask
            key={task._id}
            data={task}
            minuteInPx={minuteInPx}
          />
        ))}
        {hours.map((_, index) => {
          if (index <= 12) return (
            <View key={index} style={WorkspaceWidgetHoursStyles.hourSector}>
              {index !== 0 && <View style={WorkspaceWidgetHoursStyles.line}></View>}
              <Text style={WorkspaceWidgetHoursStyles.hour}>{index} AM</Text>
              <Pressable style={WorkspaceWidgetHoursStyles.details} key={index} onPress={() => updateFullView(index)}>
                <Ionicons name="list-circle-outline" size={25} color="#86868626"/>
              </Pressable>
            </View>
          );
          return (
            <View key={index} style={WorkspaceWidgetHoursStyles.hourSector}>
              <View style={WorkspaceWidgetHoursStyles.line}></View>
              <Text style={WorkspaceWidgetHoursStyles.hour}>{index} PM</Text>
              <Pressable style={WorkspaceWidgetHoursStyles.details} key={index} onPress={() => updateFullView(index)}>
                <Ionicons name="list-circle-outline" size={25} color="#86868626"/>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WorkspaceWidgetHours;