import React from 'react';
import {Asset} from "expo-asset";
import {LoginStyles} from "../../screens/Login/style";
import {ImageBackground, Text} from "react-native";
import {LoginBannerStyles} from "./style";

const LoginBanner: React.FC = () => {
  return (
    <>
      {/* @ts-ignore */}
      <ImageBackground
        source={{uri: Asset.fromModule(require('../../../assets/images/background-login.png')).uri}}
        style={LoginBannerStyles.loginBackground}
      >
        <Text style={LoginStyles.title}>
          Вход
        </Text>
        <Text style={LoginStyles.description}>
          Зарегистрируйтесь если хотите получать доступ к вашим данным с другого устройства
        </Text>
      </ImageBackground>
    </>

  );
};

export default LoginBanner;