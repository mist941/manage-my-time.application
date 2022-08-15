import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import TasksScreen from '../screens/TasksScreen/TasksScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import {screens} from './screens';
import StatisticsScreen from '../screens/StatisticsScreen/StatisticsScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {currentUser, loading} = useContext(AuthContext);

  const navigationOptions = {
    animationEnabled: false,
    headerShown: false,
    animation: 'none'
  };

  let routes = [
    <Stack.Screen
      key={screens.login}
      name={screens.login}
      component={LoginScreen}
      options={navigationOptions}
    />
  ];

  if (currentUser) routes = [
    <Stack.Screen
      key={screens.dashboard}
      name={screens.dashboard}
      component={DashboardScreen}
      options={navigationOptions}
    />,
    <Stack.Screen
      key={screens.tasks}
      name={screens.tasks}
      component={TasksScreen}
      options={navigationOptions}
    />,
    <Stack.Screen
      key={screens.categories}
      name={screens.categories}
      component={CategoriesScreen}
      options={navigationOptions}
    />,
    <Stack.Screen
      key={screens.statistic}
      name={screens.statistic}
      component={StatisticsScreen}
      options={navigationOptions}
    />
  ];

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;