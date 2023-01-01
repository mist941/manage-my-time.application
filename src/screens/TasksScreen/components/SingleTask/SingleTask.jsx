import React from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {SingleTaskStyles} from './SingleTask.styles';
import moment from 'moment';
import {trimRest} from '../../../../helpers/trimRest';
import {colorsList} from '../../../../helpers/colorsList';
import DeleteIcon from '../../../../../assets/icons/DeleteIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import {Ionicons} from '@expo/vector-icons';
import EmptyCategoryIcon from '../../../../../assets/icons/EmptyCategoryIcon';

const SingleTask = ({data, editTask, deleteTask}) => {

  const deleteConfirm = () => {
    Alert.alert(
      'Delete task',
      'Are you sure you want to delete this task?',
      [
        {text: 'Yes', onPress: () => deleteTask(data._id)},
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {cancelable: false}
    );
  };

  return (
    <View style={SingleTaskStyles.wrap}>
      <View style={SingleTaskStyles.header}>
        <Text style={SingleTaskStyles.name}>
          {trimRest(20, data.name)}
        </Text>
        <Text style={SingleTaskStyles.date}>
          {moment(data.start_date).format('ll')}
        </Text>
      </View>
      <View style={SingleTaskStyles.footer}>
        <View>
          {data?.categories?.map(category => (
            <View
              style={[SingleTaskStyles.category, {backgroundColor: colorsList[category.color]}]}
              key={category._id}
            >
              {category.icon && <Ionicons name={category.icon} size={17} color="black"/>}
              <Text style={SingleTaskStyles.categoryName}>
                {category.name}
              </Text>
            </View>
          ))}
        </View>
        <View style={SingleTaskStyles.actions}>
          {moment(data.start_date).isSameOrAfter(new Date()) && (
            <Pressable
              onPress={() => editTask(data)}
              style={[SingleTaskStyles.action, {backgroundColor: '#63CD9A'}]}
            >
              <EditIcon/>
            </Pressable>
          )}
          <Pressable
            onPress={deleteConfirm}
            style={[SingleTaskStyles.action, {backgroundColor: '#FF8181', marginRight: 0}]}
          >
            <DeleteIcon/>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SingleTask;