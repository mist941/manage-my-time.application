import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatisticBarChart from '../../components/BarChart/StatisticBarChart';
import {Text} from 'react-native';

const StatisticsScreen = () => {
  return (
    <AppLayout>
      <PageHeader name="Statistics"/>
      <Text>by Tasks</Text>
      <StatisticBarChart data={[
        {
          name: 'Completed',
          population: 2,
          color: 'rgba(56, 196, 21, 0.4)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12,
        },
        {
          name: 'Closed',
          population: 20,
          color: '#FF8181',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12,
        },
      ]}/>
      <Text>by Categories</Text>
      <StatisticBarChart data={[
        {
          name: 'Eating',
          population: 10,
          color: 'rgba(239, 190, 63, 0.7)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12,
        },
        {
          name: 'Masturbation',
          population: 2,
          color: 'rgba(86, 228, 255, 0.7)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12,
        },
        {
          name: 'Learning',
          population: 5,
          color: 'rgba(248, 126, 181, 0.7)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12,
        },
        {
          name: 'Working',
          population: 5,
          color: 'rgba(109, 77, 166, 0.56)',
          legendFontColor: '#873',
          legendFontSize: 12,
        },
      ]}/>
    </AppLayout>
  );
};

export default StatisticsScreen;