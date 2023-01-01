import React from 'react';
import StatisticBarChart from '../../../../components/BarChart/StatisticBarChart';
import {Text} from 'react-native';
import {StatisticsScreenStyles} from '../../StatisticsScreen.styles';

const StatisticsByTypes = ({statistics, filterParams, categories}) => {
  const tasksCount = statistics.by_types.completed_tasks_count || statistics.by_types.closed_tasks_count;
  const category = categories.find(categories => categories.value === filterParams.category);

  return (
    <>
      <Text style={StatisticsScreenStyles.title}>
        by {category ? category.label : 'Types'}
      </Text>
      {tasksCount <= 0 ? (
        <Text style={StatisticsScreenStyles.emptyTasks}>No tasks</Text>
      ) : (
        <StatisticBarChart data={[
          {
            name: 'Completed',
            population: statistics.by_types.completed_tasks_count,
            color: 'rgba(56, 196, 21, 0.4)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Closed',
            population: statistics.by_types.closed_tasks_count,
            color: '#FF8181',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
        ]}/>
      )}
    </>
  );
};

export default StatisticsByTypes;