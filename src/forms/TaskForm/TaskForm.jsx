import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import InputField from '../../components/InputField/InputField';
import {TaskFormStyles} from './TaskForm.styles';
import SelectField from '../../components/SelectField/SelectField';
import services from '../../services';
import DayPicker from '../../components/DayPicker/DayPicker';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import moment from 'moment';

const TaskForm = ({submit}) => {
  const [categories, setCategories] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      category: null,
      start_date: new Date(),
      end_date: new Date(),
    },
    onSubmit: values => submit({
      name: values.name,
      start_date: values.start_date,
      end_date: values.end_date,
      category_ids: values.category ? [values.category] : []
    }),
  });

  useEffect(() => {
    services.categoriesServices.getCategories().then(res => {
      if (res.data) setCategories(res.data.map(i => ({label: i.name, value: i._id})));
    })
  }, []);

  const {handleSubmit, setFieldValue, values} = formik;

  const getCorrectDate = (date, targetDate)=>{
    const newDate = date;
    newDate.day(targetDate.day());
    newDate.month(targetDate.month());
    newDate.year(targetDate.year());
    return newDate;
  }

  const updateDate = (date, type, name) => {
    let targetDate;
    let currentStartDate = moment(values.start_date);
    let currentEndDate = moment(values.end_date);

    if (type === "day") {
      targetDate = moment(date);
      if (targetDate.isSameOrBefore(new Date())) return;
      setFieldValue("start_date", getCorrectDate(currentStartDate, targetDate));
      setFieldValue("end_date", getCorrectDate(currentEndDate, targetDate));
    } else {
      targetDate = moment(date.nativeEvent.timestamp);
      if (name === "start_date" && targetDate.isSameOrAfter(values.end_date)) return;
      if (name === "end_date" && targetDate.isSameOrBefore(values.start_date)) return;
      setFieldValue(name, targetDate);
    }
  };

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
      <DayPicker
        styles={TaskFormStyles.fromField}
        value={values.start_date}
        onChange={value => updateDate(value, "day")}
      />
      <View style={[TaskFormStyles.formGroup, TaskFormStyles.fromField]}>
        <CustomDatePicker
          value={values.start_date}
          onChange={value => updateDate(value, "time", "start_date")}
          label="Start time"
        />
        <CustomDatePicker
          value={values.end_date}
          onChange={value => updateDate(value, "time", "end_date")}
          label="End time"
        />
      </View>
      <CustomButton
        type="form"
        text="Create task"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default TaskForm;