import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {TaskFormStyles} from '../../forms/TaskForm/TaskForm.styles';
import DayPicker from '../../components/DayPicker/DayPicker';
import PageHeader from '../../components/PageHeader/PageHeader';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';

const DashboardScreen = () => {
  const [selectedDate, setSelectDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const queryParams = {
      start_date: selectedDate
    };

    services.tasksServices.getTasks(queryParams).then(res => {
      if (res.data) {
        setTasks(res.data);
        setLoading(false);
      }
    })
  }, []);


  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Dashboard"/>
      <DayPicker
        styles={TaskFormStyles.fromField}
        value={selectedDate}
        onChange={setSelectDate}
      />
    </AppLayout>
  );
};

export default DashboardScreen;