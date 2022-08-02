import React, {useContext, useEffect} from 'react';
import CustomButton from '../../common/CustomButton/CustomButton';
import {View, Text} from 'react-native';
import {LoginButtonsGroupStyles} from './LoginButtonsGroup.styles';
import Divider from '../../common/Divider/Divider';
import {Asset} from 'expo-asset';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../../../contexts/AuthContext';
import {generateUniqueId} from '../../../helpers/generateUniqueId';

const LoginButtonsGroup = () => {
  const {t} = useTranslation();
  const {promptAsync, response, signIn} = useContext(AuthContext);

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
        text={t('without-register-btn')}
        onPress={standAloneSignIn}
      />
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
        iconUri={Asset.fromModule(require('../../../../assets/images/google.png')).uri}
        onPress={() => promptAsync()}
      />
    </View>
  );
};

export default LoginButtonsGroup;