import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {TaskFormStyles} from '../../forms/TaskForm/TaskForm.styles';
import DayPicker from '../../components/DayPicker/DayPicker';
import PageHeader from '../../components/PageHeader/PageHeader';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import WorkspaceWidget from '../../components/WorkspaceWidget/WorkspaceWidget';

const DashboardScreen = ({navigation}) => {
  const [selectedDate, setSelectDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const load = () => {
    const queryParams = {
      start_date: selectedDate,
    };
    services.tasksServices.getTasks(queryParams).then(res => {
      if (res.data) {
        setTasks(res.data);
        setLoading(false);
      }
    });
  }

  useEffect(() => {
    return navigation.addListener('focus', () => load());
  }, [navigation]);

  useEffect(() => load(), [selectedDate]);

  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Dashboard"/>
      <WorkspaceWidget tasks={tasks}/>
      <DayPicker
        styles={TaskFormStyles.fromField}
        value={selectedDate}
        onChange={date => setSelectDate(new Date(date))}
      />
    </AppLayout>
  );
};

export default DashboardScreen;