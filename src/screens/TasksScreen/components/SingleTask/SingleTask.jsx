import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SingleTaskStyles} from './SingleTask.styles';
import moment from 'moment';
import {trimRest} from '../../../../helpers/trimRest';
import {colorsList} from '../../../../helpers/colorsList';
import RunIcon from '../../../../../assets/icons/RunIcon';
import DeleteIcon from '../../../../../assets/icons/DeleteIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';

const SingleTask = ({data, runTask, editTask, deleteTask}) => {

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
          {data.categories.map(category => (
            <View
              style={[SingleTaskStyles.category, {backgroundColor: colorsList[category.color]}]}
              key={category._id}
            >
              <Text style={SingleTaskStyles.categoryName}>
                {category.name}
              </Text>
            </View>
          ))}
        </View>
        <View style={SingleTaskStyles.actions}>
          <Pressable
            onPress={runTask}
            style={SingleTaskStyles.action}
          >
            <RunIcon/>
          </Pressable>
          <Pressable
            onPress={() => editTask(data)}
            style={[SingleTaskStyles.action, {backgroundColor: '#63CD9A'}]}
          >
            <EditIcon/>
          </Pressable>
          <Pressable
            onPress={() => deleteTask(data._id)}
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