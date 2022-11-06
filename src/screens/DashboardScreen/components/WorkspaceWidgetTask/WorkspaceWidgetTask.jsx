import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {WorkspaceWidgetTaskStyles} from './WorkspaceWidgetTask.styles';
import {Ionicons} from '@expo/vector-icons';

const WorkspaceWidgetTask = ({data, minuteInPx}) => {
  const date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  let startPosition = (new Date(data.start_date) - today) / (1000 * 60) * minuteInPx;
  let endPosition = (new Date(data.end_date) - today) / (1000 * 60) * minuteInPx;

  return (
    <View style={[
      WorkspaceWidgetTaskStyles.taskWrap,
      {
        top: startPosition,
        height: endPosition - startPosition
      }
    ]}>
      <View style={WorkspaceWidgetTaskStyles.header}>
        <Text style={WorkspaceWidgetTaskStyles.name}>{data.name}</Text>
      </View>
      {endPosition - startPosition >= 50 && (
        <View style={WorkspaceWidgetTaskStyles.controls}>
          <Pressable style={WorkspaceWidgetTaskStyles.button}>
            <Ionicons name="play" size={24} color="#8811FF"/>
          </Pressable>
          <Pressable style={[WorkspaceWidgetTaskStyles.button, WorkspaceWidgetTaskStyles.rightBtn]}>
            <Ionicons name="trash" size={24} color="#8811FF"/>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default WorkspaceWidgetTask;