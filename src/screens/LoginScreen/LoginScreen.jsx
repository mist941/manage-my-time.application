import {View} from 'react-native';
import {LoginScreenStyles} from './LoginScreen.styles';
import React from 'react';
import LoginBanner from '../../components/LoginScreen/LoginBanner/LoginBanner';
import LanguageButtonsGroup from "../../components/LoginScreen/LanguageButtonsGroup/LanguageButtonsGroup";
import LoginButtonsGroup from "../../components/LoginScreen/LoginButtonsGroup/LoginButtonsGroup";

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