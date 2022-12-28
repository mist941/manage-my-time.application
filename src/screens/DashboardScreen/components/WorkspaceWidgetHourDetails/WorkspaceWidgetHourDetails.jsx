import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {WorkspaceWidgetHourDetailsStyles} from './WorkspaceWidgetHourDetails.styles';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';
import WorkspaceWidgetHourTask from '../WorkspaceWidgetHourTask/WorkspaceWidgetHourTask';

const WorkspaceWidgetHourDetails = (
  {
    currentHourFullView,
    openHours,
    selectedDate,
    tasks,
    closeTask,
    completeTask
  }
) => {

  return (
    <View style={WorkspaceWidgetHourDetailsStyles.container}>
      <View style={WorkspaceWidgetHourDetailsStyles.header}>
        <Pressable onPress={() => openHours(currentHourFullView)}>
          <Ionicons name="return-down-back" size={32} color="#868686"/>
        </Pressable>
        <Text style={WorkspaceWidgetHourDetailsStyles.hour}>
          {moment(selectedDate).format("MMM Do")} {currentHourFullView} {currentHourFullView > 12 ? "PM" : "AM"}
        </Text>
      </View>
      <View style={WorkspaceWidgetHourDetailsStyles.flatListWrap}>
        <FlatList
          data={tasks}
          keyExtractor={item => item._id}
          contentContainerStyle={WorkspaceWidgetHourDetailsStyles.flatListContainer}
          renderItem={({item}) => (
            <WorkspaceWidgetHourTask
              key={item._id}
              data={item}
              closeTask={closeTask}
              completeTask={completeTask}
            />
          )}/>
      </View>
    </View>
  );
};

export default WorkspaceWidgetHourDetails;