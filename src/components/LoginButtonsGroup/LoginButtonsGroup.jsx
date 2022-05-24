import React, {useContext, useEffect} from 'react';
import CustomButton from '../CustomButton/CustomButton'
import {View, Text} from 'react-native'
import {LoginButtonsGroupStyles} from './LoginButtonsGroup.styles';
import Divider from "../Divider/Divider";
import {Asset} from "expo-asset";
import {useTranslation} from "react-i18next";
import {AuthContext} from "../../contexts/AuthContext";

const LoginButtonsGroup = () => {
  const {t} = useTranslation();
  const {promptAsync, response, putUser} = useContext(AuthContext);

  useEffect(() => {
    if (response?.type === "success") {
      getUserData(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = async accessToken => {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {Authorization: `Bearer ${accessToken}`}
    });

    userInfoResponse.json().then(data => {
      const {email, id} = data;
      putUser({email, id});
    });
  }

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
        onPress={() => promptAsync()}/>
    </View>
  );
};

export default LoginButtonsGroup;