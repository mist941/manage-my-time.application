import React, {useEffect, useRef, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import {FlatList, View} from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import Preloader from '../../components/Preloader/Preloader';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import TaskForm from '../../forms/TaskForm/TaskForm';
import services from '../../services';
import {taskTypes} from '../../helpers/tasksTypes';
import SingleTask from './components/SingleTask/SingleTask';
import {useDidUpdate} from '../../hooks/useDidUpdate';
import {TasksScreenStyles} from './TasksScreen.styles';

const TasksScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const RBSheetRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);
  const [page, setPage] = useState(1);

  const load = () => {
    const queryParams = {
      type: taskTypes.planedTask,
      per_page: 7,
      page,
    };
    services.tasksServices.getTasks(queryParams).then(res => {
      if (res.data) {
        setTasks([...tasks, ...res.data]);
        setLoading(false);
      }
    });
  }

  useEffect(() => load(), []);

  useDidUpdate(() => load(), [page]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      services.categoriesServices.getCategories().then(res => {
        if (res.data) setCategories(res.data.map(i => ({label: i.name, value: i._id})));
      })
    });
  }, [navigation]);

  const onSubmitForm = params => {
    if (currentTask) {
      services.tasksServices.changeTask(currentTask._id, params).then(res => {
        if (res.data) {
          setTasks(prevState => prevState.map(t => t._id === res.data._id ? res.data : t));
          RBSheetRef.current.close();
          setCurrentTask(null);
        }
      });
    } else {
      services.tasksServices.createTask({...params, type: taskTypes.planedTask})
        .then(res => {
          if (res.data) {
            setTasks(prevState => [res.data, ...prevState]);
            RBSheetRef.current.close();
          }
        });
    }
  };

  const openForm = () => RBSheetRef.current.open();

  const runTask = () => {
    console.log("Run");
  };

  const editTask = data => {
    setCurrentTask(data);
    openForm();
  }

  const createTask = () => {
    setCurrentTask(null);
    openForm();
  }

  const deleteTask = id => {
    services.tasksServices.deleteTask(id).then(res => {
      if (res.data) {
        setTasks(prevState => prevState.filter(t => t._id !== id));
      }
    });
  }

  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Tasks" count={tasks.length}/>
      <View style={TasksScreenStyles.flatListWrap}>
        <FlatList
          data={tasks}
          keyExtractor={item => item._id}
          contentContainerStyle={TasksScreenStyles.flatListContainer}
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd < 0) return;
            setTimeout(() => setPage(prevState => prevState + 1), 300);
          }}
          renderItem={({item}) => (
            <SingleTask
              key={item._id}
              data={item}
              runTask={runTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          )}/>
      </View>
      <AddButton onClick={createTask}/>
      <BottomSheet height={400} ref={RBSheetRef}>
        <TaskForm
          submit={onSubmitForm}
          defaultValues={currentTask}
          categories={categories}
        />
      </BottomSheet>
    </AppLayout>
  );
};

export default TasksScreen;