import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Router = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;