import React from 'react';
import {Asset} from 'expo-asset';
import {ImageBackground, Text} from 'react-native';
import {LoginBannerStyles} from "./LoginBanner.styles";
import {useTranslation} from "react-i18next";

const LoginBanner = React.memo(() => {
  const {t} = useTranslation();
  return (
    <>
      <ImageBackground
        source={{uri: Asset.fromModule(require('../../../../assets/images/background-login.png')).uri}}
        style={LoginBannerStyles.loginBackground}
      >
        <Text style={LoginBannerStyles.title}>
          {t('sign-in')}
        </Text>
        <Text style={LoginBannerStyles.description}>
          {t('sign-in-banner-text')}
        </Text>
      </ImageBackground>
    </>

  );
});

export default LoginBanner;