import React, {useRef} from 'react';
import {Text, Pressable, Animated, Image} from 'react-native';
import {ButtonStyles} from "./Button.styles";
import {capitalizeFirstLetter} from "../../helpers/stringHelpers";

const Button = ({text, onPress, type = 'primary', iconUri}) => {
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
          ButtonStyles.button,
          ButtonStyles[type],
          {opacity: animatedOpacity},
          iconUri && ButtonStyles.withIcon
        ]
        }
      >
        {iconUri && <Image source={{uri: iconUri}} style={ButtonStyles.icon}/>}
        <Text
          style={[
            ButtonStyles.buttonText,
            ButtonStyles['text' + capitalizeFirstLetter(type)]
          ]}>
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;