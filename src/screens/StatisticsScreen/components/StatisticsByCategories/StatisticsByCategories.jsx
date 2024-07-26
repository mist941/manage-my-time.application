import React from 'react';
import StatisticPieChart from '../../../../components/StatisticPieChart/StatisticPieChart';
import {Text} from 'react-native';
import {StatisticsScreenStyles} from '../../StatisticsScreen.styles';
import {colorsList} from '../../../../helpers/colorsList';

const StatisticsByCategories = ({statistics, filterParams}) => {
  const categoriesTasksCount = statistics.by_categories.reduce((acc, current,) => acc + current.tasks_count, 0);

  if (filterParams.category) return null;

  return (
    <>
      <Text style={StatisticsScreenStyles.title}>by Categories</Text>
      {categoriesTasksCount <= 0 ? (
        <Text style={StatisticsScreenStyles.emptyTasks}>No tasks</Text>
      ) : (
        <StatisticPieChart
          data={statistics.by_categories.map(category => ({
            name: category.name,
            population: category.tasks_count,
            color: colorsList[category.color],
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          }))}
        />
      )}
    </>
  );
};

export default StatisticsByCategories;