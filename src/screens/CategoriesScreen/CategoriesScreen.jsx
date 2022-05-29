import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {Text} from 'react-native';

const CategoriesScreen = ({navigation, route}) => {
  return (
    <AppLayout currentRoute={route.name}>
      <Text>Categories</Text>
      <Text>Categories</Text>
      <Text>Categories</Text>
    </AppLayout>
  );
};

export default CategoriesScreen;