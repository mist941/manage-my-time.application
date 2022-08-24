import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, TextInput, View} from 'react-native';
import {SingleCategoryStyles} from './SingleCategory.styles';
import {colorsList} from '../../../helpers/colorsList';
import {Ionicons} from '@expo/vector-icons';
import {useOpacityAnimate} from '../../../hooks/useOpacityAnimate';
import EmptyCategoryIcon from '../../../../assets/icons/EmptyCategoryIcon';
import BottomSheet from '../../common/BottomSheet/BottomSheet';
import ColorPicker from '../../common/ColorPicker/ColorPicker';
import IconPicker from '../../common/IconPicker/IconPicker';

const SingleCategory = ({category, isEdit, setEdit, deleteCategory, changeCategory}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, () => setEdit(isEdit ? null : category._id));
  const [currentName, setCurrentName] = useState(category.name);

  const inputRef = useRef();
  const RBSheetRef = useRef();

  useEffect(() => {
    if (isEdit) inputRef.current.focus();
  }, [isEdit]);

  const onDelete = () => deleteCategory(category._id);

  const changeName = () => currentName.length ?
    changeCategory(category._id, {name: currentName}) :
    setCurrentName(category.name);

  const changeParam = (value, type) => changeCategory(category._id, {[type]: value});

  const openModal = () => RBSheetRef.current.open();

  return (
    <Pressable style={SingleCategoryStyles.wrap} onPress={handlePress}>
      <Animated.View style={[SingleCategoryStyles.animateWrap, {opacity: animatedOpacity}]}>
        <Pressable
          style={[SingleCategoryStyles.color, {backgroundColor: colorsList[category.color || "transparent"]}]}
          onPress={openModal}
        >
          {category.icon ? <Ionicons name={category.icon} size={28} color="black"/> : <EmptyCategoryIcon/>}
        </Pressable>
        <TextInput
          editable={isEdit}
          ref={inputRef}
          style={SingleCategoryStyles.text}
          onBlur={changeName}
          onChangeText={setCurrentName}
          value={currentName}
        />
        <Pressable style={SingleCategoryStyles.deleteBtn} onPress={onDelete}>
          <Ionicons name="close-outline" size={20} color="black"/>
        </Pressable>
      </Animated.View>
      <BottomSheet ref={RBSheetRef}>
        <View style={SingleCategoryStyles.pickers}>
          <ColorPicker selectedColor={category.color} onChange={changeParam}/>
          <View style={SingleCategoryStyles.spacePickers}/>
          <IconPicker selectedIcon={category.icon} onChange={changeParam}/>
        </View>
      </BottomSheet>
    </Pressable>
  );
};

export default SingleCategory;