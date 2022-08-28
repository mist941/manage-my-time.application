import React from "react";
import {Image, Pressable, View} from "react-native";
import {Asset} from "expo-asset";
import {LanguageButtonsGroupStyles} from "./LanguageButtonsGroup.styles";
import i18n from "i18next";

const LanguageButtonsGroup = () => {

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }

  return (
    <View style={LanguageButtonsGroupStyles.languages}>
      <Pressable onPress={() => changeLanguage('en')}>
        <Image
          style={LanguageButtonsGroupStyles.language}
          source={{
            uri: Asset.fromModule(require('../../../../../assets/images/english.png')).uri,
          }}
        />
      </Pressable>
      <Pressable onPress={() => changeLanguage('ua')}>
        <Image
          style={LanguageButtonsGroupStyles.language}
          source={{
            uri: Asset.fromModule(require('../../../../../assets/images/ukrainian.png')).uri,
          }}
        />
      </Pressable>
      <Pressable onPress={() => changeLanguage('ru')}>
        <Image
          style={[LanguageButtonsGroupStyles.language, LanguageButtonsGroupStyles.last]}
          source={{
            uri: Asset.fromModule(require('../../../../../assets/images/russian.png')).uri,
          }}
        />
      </Pressable>
    </View>
  );
};

export default LanguageButtonsGroup;