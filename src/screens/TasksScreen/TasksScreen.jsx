import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {Text} from 'react-native';

const TasksScreen = ({navigation, route}) => {
  return (
    <AppLayout currentRoute={route.name} navigation={navigation}>
      <Text>Tasks</Text>
    </AppLayout>
  );
};

export default TasksScreen;