import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import InputField from '../../components/InputField/InputField';
import {TaskFormStyles} from './TaskForm.styles';
import SelectField from '../../components/SelectField/SelectField';
import services from '../../services';
import CalendarStrip from 'react-native-calendar-strip';
import DatePicker from '../../components/DayPicker/DatePicker';

const TaskForm = ({submit}) => {
  const [categories, setCategories] = useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      category: [],
      start_date: new Date(),
      end_date: new Date(),
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
      <DatePicker
        styles={TaskFormStyles.fromField}
        value={values.start_date}
        onChange={value => {
          setFieldValue('start_date', value);
          setFieldValue('end_date', value);
        }}
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