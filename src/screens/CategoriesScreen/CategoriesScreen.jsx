import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {iconsList} from '../../helpers/iconsList';

const CategoriesScreen = () => {
  return (
    <AppLayout>
      <Ionicons name={iconsList[0]} size={25} color='black'/>
      <Text>Categories</Text>
    </AppLayout>
  );
};

export default CategoriesScreen;