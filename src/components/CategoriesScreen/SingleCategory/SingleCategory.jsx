import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, TextInput} from 'react-native';
import {SingleCategoryStyles} from './SingleCategory.styles';
import {colorsList} from '../../../helpers/colorsList';
import {Ionicons} from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useOpacityAnimate} from '../../../hooks/useOpacityAnimate';

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

  const changeName = () => changeCategory({name: currentName});

  const openModal = () => RBSheetRef.current.open();

  return (
    <Pressable style={SingleCategoryStyles.wrap} onPress={handlePress}>
      <Animated.View style={[SingleCategoryStyles.animateWrap, {opacity: animatedOpacity}]}>
        <Pressable
          style={[SingleCategoryStyles.color, {backgroundColor: colorsList[category.color]}]}
          onPress={openModal}
        >
          <Ionicons name={category.icon} size={28} color="black"/>
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
      <RBSheet
        ref={RBSheetRef}
        height={250}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >

      </RBSheet>
    </Pressable>
  );
};

export default SingleCategory;