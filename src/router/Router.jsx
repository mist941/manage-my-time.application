import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import TasksScreen from '../screens/TasksScreen/TasksScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import {screens} from './screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {currentUser} = useContext(AuthContext);

  const navigationOptions = {
    animationEnabled: false,
    headerShown: false,
    animation: 'none'
  };

  let routes = [
    <Stack.Screen name={screens.login} component={LoginScreen} options={navigationOptions}/>
  ];

  if (currentUser) routes = [
    <Stack.Screen name={screens.dashboard} component={DashboardScreen} options={navigationOptions}/>,
    <Stack.Screen name={screens.tasks} component={TasksScreen} options={navigationOptions}/>,
    <Stack.Screen name={screens.categories} component={CategoriesScreen} options={navigationOptions}/>
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;