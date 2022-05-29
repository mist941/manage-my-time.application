import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import CurrentDayWidget from '../../components/CurrentDayWidget/CurrentDayWidget';

const DashboardScreen = ({navigation, route}) => {
  return (
    <AppLayout currentRoute={route.name} navigation={navigation}>
      <CurrentDayWidget/>
    </AppLayout>
  );
};

export default DashboardScreen;