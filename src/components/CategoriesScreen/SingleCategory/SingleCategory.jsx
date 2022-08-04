import React, {useRef} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import {SingleCategoryStyles} from './SingleCategory.styles';
import {colorsList} from '../../../helpers/colorsList';
import {Ionicons} from '@expo/vector-icons';

const SingleCategory = ({category, isEdit, setEdit, deleteCategory}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    animatedOpacity.setValue(0.5);
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
    setEdit(isEdit ? null : category._id);
  }

  const onDelete = () => deleteCategory(category._id);

  return (
    <Pressable style={SingleCategoryStyles.wrap} onPress={handlePress}>
      <Animated.View style={[SingleCategoryStyles.animateWrap, {opacity: animatedOpacity}]}>
        {isEdit && (
          <Pressable style={SingleCategoryStyles.deleteBtn} onPress={onDelete}>
            <Ionicons name="close-outline" size={20} color="black"/>
          </Pressable>
        )}
        <View style={[SingleCategoryStyles.color, {backgroundColor: colorsList[category.color]}]}>
          <Ionicons name={category.icon} size={28} color="black"/>
        </View>
        <Text style={SingleCategoryStyles.text}>{category.name}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default SingleCategory;