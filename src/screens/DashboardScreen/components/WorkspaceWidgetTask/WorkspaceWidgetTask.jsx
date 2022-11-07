import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {WorkspaceWidgetTaskStyles} from './WorkspaceWidgetTask.styles';
import {Ionicons} from '@expo/vector-icons';
import {getMinutesFromStartDay} from '../../../../helpers/getMinutesFromStartDay';
import commonStyles from '../../../../common.styles';

const WorkspaceWidgetTask = ({data, minuteInPx}) => {
  let startPosition = getMinutesFromStartDay(new Date(data.start_date)) * minuteInPx;
  let endPosition = getMinutesFromStartDay(new Date(data.end_date)) * minuteInPx;

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
            <Ionicons name="play" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
          <Pressable
            style={[
              WorkspaceWidgetTaskStyles.button,
              WorkspaceWidgetTaskStyles.rightBtn
            ]}
          >
            <Ionicons name="trash" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default WorkspaceWidgetTask;