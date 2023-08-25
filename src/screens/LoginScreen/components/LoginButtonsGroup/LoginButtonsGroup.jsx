import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {LoginButtonsGroupStyles} from './LoginButtonsGroup.styles';
import {Asset} from 'expo-asset';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../../../../contexts/AuthContext';
import {generateUniqueId} from '../../../../helpers/generateUniqueId';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import Divider from '../../../../components/Divider/Divider';

const LoginButtonsGroup = () => {
  const {t} = useTranslation();
  const {response, signIn} = useContext(AuthContext);

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
      signIn({email, google_id: id});
    });
  }

  const standAloneSignIn = () => {
    signIn({stand_alone_key: generateUniqueId()});
  }

  return (
    <View style={LoginButtonsGroupStyles.btnGroup}>
      <CustomButton
        text={t('Sign in')}
        onPress={standAloneSignIn}
      />
    </View>
  );
};

export default LoginButtonsGroup;