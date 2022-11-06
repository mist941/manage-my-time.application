import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {WorkspaceWidgetHourDetailsStyles} from './WorkspaceWidgetHourDetails.styles';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';

const WorkspaceWidgetHourDetails = ({currentHourFullView, openHours, selectedDate}) => {

  return (
    <View style={WorkspaceWidgetHourDetailsStyles.header}>
      <Pressable onPress={() => openHours(currentHourFullView)}>
        <Ionicons name="return-down-back" size={32} color="#868686"/>
      </Pressable>
      <Text style={WorkspaceWidgetHourDetailsStyles.hour}>
        {moment(selectedDate).format("MMM Do")} {currentHourFullView} {currentHourFullView > 12 ? "PM" : "AM"}
      </Text>
    </View>
  );
};

export default WorkspaceWidgetHourDetails;