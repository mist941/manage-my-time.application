import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WorkspaceWidgetStyles} from "./WorkspaceWidget.styles";
import WorkspaceWidgetHours from '../WorkspaceWidgetHours/WorkspaceWidgetHours';
import WorkspaceWidgetHourDetails from '../WorkspaceWidgetHourDetails/WorkspaceWidgetHourDetails';

const WorkspaceWidget = ({tasks, selectedDate,}) => {
  const [currentHourFullView, setCurrentHourFullView] = useState(null);

  const updateFullView = hour => {
    if (currentHourFullView === hour) setCurrentHourFullView(null);
    else setCurrentHourFullView(hour);
  }

  useEffect(() => updateFullView(currentHourFullView), [selectedDate]);

  return (
    <View style={WorkspaceWidgetStyles.widgetWrap}>
      {currentHourFullView !== null && (
        <WorkspaceWidgetHourDetails
          selectedDate={selectedDate}
          currentHourFullView={currentHourFullView}
          openHours={updateFullView}
        />
      )}
      {currentHourFullView === null && (
        <WorkspaceWidgetHours
          updateFullView={updateFullView}
          tasks={tasks}
        />)}
    </View>
  );
};

export default WorkspaceWidget;