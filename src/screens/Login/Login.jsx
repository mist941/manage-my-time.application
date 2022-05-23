import {View} from 'react-native';
import {LoginStyles} from './Login.styles';
import React from 'react';
import LoginBanner from '../../components/LoginBanner/LoginBanner';
import LanguageButtonsGroup from "../../components/LanguageButtonsGroup/LanguageButtonsGroup";
import LoginButtonsGroup from "../../components/LoginButtonsGroup/LoginButtonsGroup";

const Login = () => {
  return (
    <View style={LoginStyles.wrapper}>
      <LoginBanner/>
      <LoginButtonsGroup/>
      <LanguageButtonsGroup/>
    </View>
  );
};

export default Login;