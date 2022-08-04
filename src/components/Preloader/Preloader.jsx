import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import commonStyles from '../../common.styles';
import {PreloaderStyles} from './Preloader.styles';
import AppLayout from '../../layouts/AppLayout/AppLayout';

const Preloader = () => {
  return (
    <AppLayout>
      <View style={[PreloaderStyles.container]}>
        <ActivityIndicator size="large" color={commonStyles.secondaryBackground}/>
      </View>
    </AppLayout>
  );
};

export default Preloader;