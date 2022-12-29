import React from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import {WorkspaceWidgetTaskStyles} from './WorkspaceWidgetTask.styles';
import {Ionicons} from '@expo/vector-icons';
import {getMinutesFromStartDay} from '../../../../helpers/getMinutesFromStartDay';
import commonStyles from '../../../../common.styles';
import moment from 'moment';
import {WorkspaceWidgetHourTaskStyles} from '../WorkspaceWidgetHourTask/WorkspaceWidgetHourTask.styles';

const WorkspaceWidgetTask = ({data, minuteInPx, closeTask, completeTask}) => {
  let startPosition = getMinutesFromStartDay(new Date(data.start_date)) * minuteInPx;
  let endPosition = getMinutesFromStartDay(new Date(data.end_date)) * minuteInPx;

  if (endPosition - startPosition < 40) return null;

  const promptClose = () => {
    Alert.alert(
      'Complete Task',
      'Are you sure you want to close this task?',
      [
        {text: 'Yes', onPress: () => closeTask(data._id)},
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {cancelable: false}
    );
  }

  const promptComplete = () => {
    Alert.alert(
      'Complete Task',
      'Are you sure you want to complete this task?',
      [
        {text: 'Yes', onPress: () => completeTask(data._id)},
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {cancelable: false}
    );
  }

  return (
    <View style={[
      WorkspaceWidgetTaskStyles.taskWrap,
      data.finished_date && WorkspaceWidgetHourTaskStyles.completed,
      data.closed_date && WorkspaceWidgetHourTaskStyles.closed,
      {
        top: startPosition,
        height: endPosition - startPosition
      }
    ]}>
      <View style={WorkspaceWidgetTaskStyles.header}>
        <Text style={WorkspaceWidgetTaskStyles.name}>{data.name}</Text>
      </View>
      {(
        endPosition - startPosition >= 60 &&
        moment(data.end_date).isSameOrBefore(new Date()) &&
        !data.finished_date &&
        !data.closed_date
      ) && (
        <View style={WorkspaceWidgetTaskStyles.controls}>
          <Pressable style={WorkspaceWidgetTaskStyles.button} onPress={promptComplete}>
            <Ionicons name="checkmark-done-sharp" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
          <Pressable
            onPress={promptClose}
            style={[
              WorkspaceWidgetTaskStyles.button,
              WorkspaceWidgetTaskStyles.rightBtn
            ]}
          >
            <Ionicons name="close" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default WorkspaceWidgetTask;