import {View} from 'react-native';
import {LoginScreenStyles} from './LoginScreen.styles';
import React from 'react';
import LoginBanner from './components/LoginBanner/LoginBanner';
import LoginButtonsGroup from './components/LoginButtonsGroup/LoginButtonsGroup';
import LanguageButtonsGroup from './components/LanguageButtonsGroup/LanguageButtonsGroup';

const LoginScreen = () => {
  return (
    <View style={LoginScreenStyles.wrapper}>
      <LoginBanner/>
      <LoginButtonsGroup/>
      <LanguageButtonsGroup/>
    </View>
  );
};

export default LoginScreen;