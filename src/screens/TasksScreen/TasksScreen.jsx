import React, {useEffect, useRef, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Text} from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import Preloader from '../../components/Preloader/Preloader';
import ScrollListWrapper from '../../components/ScrollListWrapper/ScrollListWrapper';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import TaskForm from '../../forms/TaskForm/TaskForm';
import services from '../../services';
import {taskTypes} from '../../helpers/tasksTypes';

const TasksScreen = () => {
  const RBSheetRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    services.tasksServices.getTasks({type: taskTypes.planedTask}).then(res => {
      if (res.data) {
        setTasks(res.data);
        setLoading(false);
      }
    });
  }, []);

  const addNewTask = params => {
    services.tasksServices.createTask({...params, type: taskTypes.planedTask})
      .then(res => {
        if (res.data) {
          console.log(res.data);
        }
      }).catch(error => console.log(error.response?.data.error))
  };

  const openForm = () => RBSheetRef.current.open();

  if (loading) return <Preloader/>;

  return (
    <>
      <AppLayout>
        <PageHeader name="Tasks" count={tasks.length}/>
        <ScrollListWrapper>
          {tasks.map(task => (
            <Text>task</Text>
          ))}
        </ScrollListWrapper>
        <AddButton onClick={openForm}/>
        <BottomSheet height={450} ref={RBSheetRef}>
          <TaskForm submit={addNewTask}/>
        </BottomSheet>
      </AppLayout>
    </>
  );
};

export default TasksScreen;