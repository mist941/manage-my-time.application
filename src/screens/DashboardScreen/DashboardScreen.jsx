import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {Text} from 'react-native';
import {TaskFormStyles} from '../../forms/TaskForm/TaskForm.styles';
import DayPicker from '../../components/DayPicker/DayPicker';

const DashboardScreen = () => {
  return (
    <AppLayout>
      <Text>Dashboard</Text>
      <DayPicker
        styles={TaskFormStyles.fromField}
        value={new Date()}
        onChange={value => console.log(value)}
      />
    </AppLayout>
  );
};

export default DashboardScreen;