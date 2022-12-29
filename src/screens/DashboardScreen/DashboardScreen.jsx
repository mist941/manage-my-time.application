import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import DayPicker from '../../components/DayPicker/DayPicker';
import PageHeader from '../../components/PageHeader/PageHeader';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import WorkspaceWidget from './components/WorkspaceWidget/WorkspaceWidget';
import {DashboardScreenStyles} from './DashboardScreen.styles';

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

  const updateTask = newTask => {
    setTasks(prevState => prevState.map(task => task._id === newTask._id ? newTask : task));
  }

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setSelectDate(new Date());
      load();
    });
  }, [navigation]);

  useEffect(() => load(), [selectedDate]);

  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Dashboard"/>
      <WorkspaceWidget
        tasks={tasks}
        selectedDate={selectedDate}
        updateTask={updateTask}
      />
      <DayPicker
        styles={DashboardScreenStyles.dayPicker}
        value={selectedDate}
        onChange={date => setSelectDate(new Date(date))}
      />
    </AppLayout>
  );
};

export default DashboardScreen;