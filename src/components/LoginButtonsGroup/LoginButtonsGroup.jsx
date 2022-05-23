import React from 'react';
import CustomButton from '../CustomButton/CustomButton'
import {View, Text} from 'react-native'
import {LoginButtonsGroupStyles} from './LoginButtonsGroup.styles';
import Divider from "../Divider/Divider";
import {Asset} from "expo-asset";
import {useTranslation} from "react-i18next";

const LoginButtonsGroup = () => {
  const {t} = useTranslation();
  return (
    <View style={LoginButtonsGroupStyles.btnGroup}>
      <CustomButton text={t('without-register-btn')} onPress={() => {
      }}/>
      <View style={LoginButtonsGroupStyles.dividerGroup}>
        <Divider height={1}/>
        <Text style={LoginButtonsGroupStyles.text}>
          {t('or')}
        </Text>
        <Divider height={1}/>
      </View>
      <CustomButton
        text={t('sign-in-with-google')}
        type='secondary'
        iconUri={Asset.fromModule(require('../../../assets/images/google.png')).uri}
        onPress={() => {
        }}/>
    </View>
  );
};

export default LoginButtonsGroup;