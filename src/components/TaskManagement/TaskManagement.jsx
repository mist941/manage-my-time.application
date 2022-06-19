import React from 'react';
import {View, Text} from 'react-native';
import {TaskManagementStyles} from './TaskManagement.styles';

const TaskManagement = () => {
  return (
    <View style={TaskManagementStyles.taskManagementWrap}>
      <Text>
        Task
      </Text>
    </View>
  );
};

export default TaskManagement;