import {View, Image} from "react-native";
import {Asset} from "expo-asset";
import {LoginStyles} from "./style";
import React from "react";
import LoginBanner from "../../components/LoginBanner/LoginBanner";

const Login: React.FC = () => {
  return (
    <View style={LoginStyles.wrapper}>
      <LoginBanner/>
      <View style={LoginStyles.languages}>
        <Image
          style={LoginStyles.language}
          source={{
            uri: Asset.fromModule(require('../../../assets/images/english.png')).uri,
          }}
        />
        <Image
          style={LoginStyles.language}
          source={{
            uri: Asset.fromModule(require('../../../assets/images/ukrainian.png')).uri,
          }}
        />
        <Image
          style={LoginStyles.language}
          source={{
            uri: Asset.fromModule(require('../../../assets/images/russian.png')).uri,
          }}
        />
      </View>
    </View>
  );
};

export default Login;