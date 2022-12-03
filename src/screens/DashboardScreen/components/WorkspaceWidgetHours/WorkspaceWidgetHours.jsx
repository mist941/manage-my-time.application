import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {WorkspaceWidgetHoursStyles} from './WorkspaceWidgetHours.styles';
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

  const getTasksByHour = hour => tasks.filter(task => hour === new Date(task.start_date).getHours());

  const renderHourBlock = hour => {
    const tasks = getTasksByHour(hour);
    return (
      <View key={hour} style={WorkspaceWidgetHoursStyles.hourSector}>
        {hour !== 0 && <View style={WorkspaceWidgetHoursStyles.line}></View>}
        <Text style={WorkspaceWidgetHoursStyles.hour}>{hour} {hour <= 12 ? "AM" : "PM"}</Text>
        {tasks.length > 0 && (
          <Pressable
            style={WorkspaceWidgetHoursStyles.details}
            onPress={() => updateFullView(hour)}
          >
            <View style={WorkspaceWidgetHoursStyles.hourDetails}>
              <Text style={WorkspaceWidgetHoursStyles.tasksCount}>{tasks.length}</Text>
            </View>
          </Pressable>
        )}
      </View>
    )
  }

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
        {hours.map((_, index) => renderHourBlock(index))}
      </View>
    </ScrollView>
  );
};

export default WorkspaceWidgetHours;