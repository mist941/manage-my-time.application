import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {WorkspaceWidgetHourTaskStyles} from './WorkspaceWidgetHourTask.styles';
import {trimRest} from '../../../../helpers/trimRest';
import moment from 'moment';
import {Ionicons} from '@expo/vector-icons';
import commonStyles from '../../../../common.styles';

const WorkspaceWidgetHourTask = ({data, completeTask, closeTask}) => {
  return (
    <View style={WorkspaceWidgetHourTaskStyles.wrap}>
      <View>
        <Text style={WorkspaceWidgetHourTaskStyles.name}>
          {trimRest(20, data.name)}
        </Text>
        <Text style={WorkspaceWidgetHourTaskStyles.date}>
          {`${moment(data.start_date).format('hh:mm')} - ${moment(data.end_date).format('hh:mm')}`}
        </Text>
      </View>
      {(moment(data.end_date).isSameOrBefore(new Date())) && (
        <View style={WorkspaceWidgetHourTaskStyles.right}>
          <Pressable style={WorkspaceWidgetHourTaskStyles.button} onPress={() => completeTask(data._id)}>
            <Ionicons name="checkmark-done-sharp" size={24} color={commonStyles.secondaryBackground}/>
          </Pressable>
          <Pressable
            onPress={() => closeTask(data._id)}
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