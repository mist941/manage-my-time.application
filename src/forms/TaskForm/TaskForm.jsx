import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import InputField from '../../components/InputField/InputField';
import {TaskFormStyles} from './TaskForm.styles';
import SelectField from '../../components/SelectField/SelectField';
import services from '../../services';
import CalendarStrip from 'react-native-calendar-strip';

const TaskForm = ({submit}) => {
  const [categories, setCategories] = useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      category: [],
      start_date: null,
      end_date: null,
    },
    onSubmit: values => {

    },
  });

  useEffect(() => {
    services.categoriesServices.getCategories().then(res => {
      if (res.data) setCategories(res.data.map(i => ({label: i.name, value: i._id})));
    })
  }, []);

  const {handleSubmit, setFieldValue, values} = formik;

  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 6;
  }

  return (
    <View style={TaskFormStyles.form}>
      <InputField
        placeholder="Enter task name"
        label="Task name"
        styles={TaskFormStyles.fromField}
        value={values.name}
        onChange={value => setFieldValue('name', value)}
      />
      <SelectField
        placeholder="Select category"
        label="Category"
        styles={TaskFormStyles.fromField}
        value={values.category}
        onChange={value => setFieldValue('category', value)}
        options={categories}
      />
      <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 30}}
        style={{height: 70, width: 320}}
      />
      <CustomButton
        type="form"
        text="Create task"

        onPress={handleSubmit}
      />
    </View>
  );
};

export default TaskForm;