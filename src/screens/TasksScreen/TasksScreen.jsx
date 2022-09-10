import React, {useEffect, useRef, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Text} from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import Preloader from '../../components/Preloader/Preloader';
import ScrollListWrapper from '../../components/ScrollListWrapper/ScrollListWrapper';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import TaskForm from '../../forms/TaskForm/TaskForm';

const TasksScreen = () => {
  const RBSheetRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const addNewTask = () => {
  };

  const openForm = () => RBSheetRef.current.open();

  if (loading) return <Preloader/>;

  return (
    <>
      <AppLayout>
        <PageHeader name="Tasks" count={0}/>
        <ScrollListWrapper>
          {tasks.map(task => (
            <Text>task</Text>
          ))}
        </ScrollListWrapper>
        <AddButton onClick={openForm}/>
        <BottomSheet height={500} ref={RBSheetRef}>
          <TaskForm submit={addNewTask}/>
        </BottomSheet>
      </AppLayout>
    </>
  );
};

export default TasksScreen;