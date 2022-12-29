import React from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {WorkspaceWidgetHourTaskStyles} from './WorkspaceWidgetHourTask.styles';
import {trimRest} from '../../../../helpers/trimRest';
import moment from 'moment';
import {Ionicons} from '@expo/vector-icons';
import commonStyles from '../../../../common.styles';

const WorkspaceWidgetHourTask = ({data, completeTask, closeTask}) => {
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
  return (
    <View style={[
      WorkspaceWidgetHourTaskStyles.wrap,
      data.finished_date && WorkspaceWidgetHourTaskStyles.completed,
      data.closed_date && WorkspaceWidgetHourTaskStyles.closed,
    ]}>
      <View>
        <Text style={WorkspaceWidgetHourTaskStyles.name}>
          {trimRest(40, data.name)}
        </Text>
        <Text style={WorkspaceWidgetHourTaskStyles.date}>
          {`${moment(data.start_date).format('hh:mm')} - ${moment(data.end_date).format('hh:mm')}`}
        </Text>
      </View>
      {(moment(data.end_date).isSameOrBefore(new Date()) && !data.finished_date && !data.closed_date) && (
        <View style={WorkspaceWidgetHourTaskStyles.right}>
          <Pressable style={WorkspaceWidgetHourTaskStyles.button} onPress={promptComplete}>
            <Ionicons name="checkmark-done-sharp" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
          <Pressable
            onPress={promptClose}
            style={[
              WorkspaceWidgetHourTaskStyles.button,
              WorkspaceWidgetHourTaskStyles.rightBtn
            ]}
          >
            <Ionicons name="close" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default WorkspaceWidgetHourTask;