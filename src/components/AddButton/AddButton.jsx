import React, {useRef} from 'react';
import PlusIcon from '../../../assets/icons/PlusIcon';
import {AddButtonStyles} from './AddButton.styles';
import {Animated, Pressable} from 'react-native';
import {useOpacityAnimate} from '../../hooks/useOpacityAnimate';

const AddButton = ({onClick}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, onClick);

  return (
    <Pressable style={AddButtonStyles.wrapBtn} onPress={handlePress}>
      <Animated.View style={[AddButtonStyles.addCategoryBtn, {opacity: animatedOpacity}]}>
        <PlusIcon/>
      </Animated.View>
    </Pressable>
  );
};

export default AddButton;