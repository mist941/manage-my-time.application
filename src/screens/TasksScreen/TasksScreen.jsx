import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Text} from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import Preloader from '../../components/Preloader/Preloader';
import ScrollListWrapper from '../../components/ScrollListWrapper/ScrollListWrapper';
import SidebarDrawer from '../../components/SidebarDrawer/SidebarDrawer';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    }).then(() => setLoading(false));
  }, []);

  const addNewTask = () => setOpenSidebar(true);

  if (loading) return <Preloader/>;

  return (
    <>
      <AppLayout>
        <PageHeader name="Tasks" count={0}/>
        <ScrollListWrapper>
          {tasks.map(category => (
            <Text>task</Text>
          ))}
        </ScrollListWrapper>
        <AddButton onClick={addNewTask}/>
      </AppLayout>
      <SidebarDrawer isOpen={isOpenSidebar}>
        <Text>Text</Text>
      </SidebarDrawer>
    </>
  );
};

export default TasksScreen;