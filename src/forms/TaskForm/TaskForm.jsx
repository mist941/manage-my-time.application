import React from 'react';
import {useFormik} from 'formik';
import {View} from 'react-native';
import CustomButton from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import {TaskFormStyles} from './TaskForm.styles';
import SelectField from '../../components/SelectField/SelectField';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import moment from 'moment';
import {object, string} from 'yup';
import {constants} from './constants';

const TaskForm = ({submit, categories, defaultValues}) => {

  const formik = useFormik({
    initialValues: {
      name: defaultValues?.name || "",
      category: defaultValues?.categories[0] ?
        defaultValues?.categories[0]._id :
        null,
      start_date: defaultValues?.start_date ?
        moment(defaultValues?.start_date) :
        moment(new Date()),
      end_date: defaultValues?.end_date ?
        moment(defaultValues?.end_date) :
        moment(new Date(new Date().getTime() + 60000)),
    },
    validationSchema: object({
      name: string()
        .required('Please, enter a task name')
        .max(50, 'Task name should be 50 characters or less'),
      start_date: string()
        .required("Start date is required").nullable(),
    }),
    onSubmit: values => submit({
      name: values.name,
      start_date: values.start_date,
      end_date: values.end_date,
      category_ids: values.category ? [values.category] : []
    })
  });

  const {handleSubmit, setFieldValue, values, errors} = formik;

  const updateDay = (data, targetDate) => {
    return moment({
      year: data.year(),
      month: data.month(),
      date: data.date(),
      hour: targetDate.hour(),
      minute: targetDate.minute(),
      second: targetDate.second(),
      millisecond: targetDate.millisecond(),
    });
  };

  const updateDate = (date, type, name) => {
    const preparedDate = moment(date.nativeEvent.timestamp);
    if (preparedDate.isSameOrBefore(new Date())) return;
    if (type === "day") {
      setFieldValue(constants.startDate, updateDay(preparedDate, values.start_date));
      setFieldValue(constants.endDate, updateDay(preparedDate, values.end_date));
    } else {
      if (name === constants.startDate && preparedDate.isSameOrAfter(values.end_date)) {
        const newEndDate = moment(preparedDate).add(1, "m");
        setFieldValue(constants.endDate, newEndDate);
      }
      if (name === constants.endDate && preparedDate.isSameOrBefore(values.start_date)) {
        const newStartDate = moment(preparedDate).subtract(1, "m");
        setFieldValue(constants.startDate, newStartDate);
      }
      setFieldValue(name, preparedDate);
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
        error={errors.name}
      />
      <SelectField
        placeholder="Select category"
        label="Category"
        styles={TaskFormStyles.fromField}
        value={values.category}
        onChange={value => setFieldValue('category', value)}
        options={categories}
      />
      <View style={TaskFormStyles.fromField}>
        <CustomDatePicker
          value={values.start_date}
          onChange={value => updateDate(value, "day")}
          visibleType='day'
          width='100%'
          mode='date'
        />
      </View>
      <View style={[TaskFormStyles.formGroup, TaskFormStyles.fromField]}>
        <CustomDatePicker
          value={values.start_date}
          onChange={value => updateDate(value, "time", constants.startDate)}
        />
        <CustomDatePicker
          value={values.end_date}
          onChange={value => updateDate(value, "time", constants.endDate)}
        />
      </View>
      <CustomButton
        type="form"
        text={defaultValues?._id ? "Save task" : "Create task"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default TaskForm;