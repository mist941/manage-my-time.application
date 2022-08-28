import React, {useRef} from 'react';
import {Text, Pressable, Animated, Image} from 'react-native';
import {CustomButtonStyles} from "./CustomButton.styles";
import {capitalizeFirstLetter} from "../../helpers/stringHelpers";

const CustomButton = ({text, onPress, type = 'primary', iconUri}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    animatedOpacity.setValue(0.5);
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
    onPress();
  }

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          CustomButtonStyles.button,
          CustomButtonStyles[type],
          {opacity: animatedOpacity},
          iconUri && CustomButtonStyles.withIcon
        ]
        }
      >
        {iconUri && <Image source={{uri: iconUri}} style={CustomButtonStyles.icon}/>}
        <Text
          style={[
            CustomButtonStyles.buttonText,
            CustomButtonStyles['text' + capitalizeFirstLetter(type)]
          ]}>
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton;