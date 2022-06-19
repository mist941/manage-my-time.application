import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import CurrentDayWidget from '../../components/CurrentDayWidget/CurrentDayWidget';
import TaskManagement from '../../components/TaskManagement/TaskManagement';

const DashboardScreen = ({navigation, route}) => {
  return (
    <AppLayout currentRoute={route.name} navigation={navigation}>
      <CurrentDayWidget/>
      <TaskManagement/>
    </AppLayout>
  );
};

export default DashboardScreen;