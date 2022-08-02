import React from 'react';
import {View} from 'react-native';
import {NavigationStyles} from './Navigation.styles';
import NavItem from '../NavItem/NavItem';
import {screens} from '../../../router/screens';
import StatisticIcon from '../../../../assets/icons/StatisticIcon';
import DashboardIcon from '../../../../assets/icons/DashboardIcon';
import CategoriesIcon from '../../../../assets/icons/CategoriesIcon';
import TasksIcon from '../../../../assets/icons/TasksIcon';
import {useRoute} from '@react-navigation/native';

const Navigation = () => {
  const route = useRoute();

  return (
    <View style={NavigationStyles.navigation}>
      <NavItem
        icon={<StatisticIcon/>}
        name={screens.statistic}
        isActive={route.name === screens.statistic}
      />
      <NavItem
        icon={<DashboardIcon/>}
        name={screens.dashboard}
        isActive={route.name === screens.dashboard}
      />
      <NavItem
        icon={<CategoriesIcon/>}
        name={screens.categories}
        isActive={route.name === screens.categories}
      />
      <NavItem
        icon={<TasksIcon/>}
        name={screens.tasks}
        isActive={route.name === screens.tasks}
      />
    </View>
  );
};

export default Navigation;