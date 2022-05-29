import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {currentUser} = useContext(AuthContext);

  let routes = [
    <Stack.Screen name="Login" component={LoginScreen} options={{
      headerShown: false
    }}/>
  ];

  if (currentUser) routes = [
    <Stack.Screen name="Categories" component={CategoriesScreen} options={{
      headerShown: false
    }}/>
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