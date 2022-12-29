import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WorkspaceWidgetStyles} from './WorkspaceWidget.styles';
import WorkspaceWidgetHours from '../WorkspaceWidgetHours/WorkspaceWidgetHours';
import WorkspaceWidgetHourDetails from '../WorkspaceWidgetHourDetails/WorkspaceWidgetHourDetails';
import moment from 'moment';
import services from '../../../../services';

const WorkspaceWidget = ({tasks, selectedDate, updateTask}) => {
  const [currentHourFullView, setCurrentHourFullView] = useState(null);
  const tasksByHour = tasks.filter(task => moment(task.start_date).get("hour") === currentHourFullView);

  const updateFullView = hour => {
    if (currentHourFullView === hour) setCurrentHourFullView(null);
    else setCurrentHourFullView(hour);
  }

  useEffect(() => updateFullView(currentHourFullView), [selectedDate]);

  const closeTask = id => {
    services.tasksServices.closeTask(id).then(res => {
      if (res.data) updateTask(res.data);
    })
  }

  const completeTask = id => {
    services.tasksServices.completeTask(id).then(res => {
      if (res.data) updateTask(res.data);
    })
  }

  return (
    <View style={WorkspaceWidgetStyles.widgetWrap}>
      {currentHourFullView && (
        <WorkspaceWidgetHourDetails
          selectedDate={selectedDate}
          currentHourFullView={currentHourFullView}
          openHours={updateFullView}
          tasks={tasksByHour}
          closeTask={closeTask}
          completeTask={completeTask}
        />
      )}
      {!currentHourFullView && (
        <WorkspaceWidgetHours
          updateFullView={updateFullView}
          selectedDate={selectedDate}
          tasks={tasks}
          closeTask={closeTask}
          completeTask={completeTask}
        />)}
    </View>
  );
};

export default WorkspaceWidget;