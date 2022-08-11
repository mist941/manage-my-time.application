import React, {useRef} from 'react';
import PlusIcon from '../../../../assets/icons/PlusIcon';
import {AddCategoryBtnStyles} from './AddCategoryBtn.styles';
import {Animated, Pressable} from 'react-native';
import {useOpacityAnimate} from '../../../hooks/useOpacityAnimate';

const AddCategoryBtn = ({onClick}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, onClick);

  return (
    <Pressable style={AddCategoryBtnStyles.wrapBtn} onPress={handlePress}>
      <Animated.View style={[AddCategoryBtnStyles.addCategoryBtn, {opacity: animatedOpacity}]}>
        <PlusIcon/>
      </Animated.View>
    </Pressable>
  );
};

export default AddCategoryBtn;