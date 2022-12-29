import React, {useEffect, useRef, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Alert, FlatList, View} from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import Preloader from '../../components/Preloader/Preloader';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import TaskForm from '../../forms/TaskForm/TaskForm';
import services from '../../services';
import {taskTypes} from '../../helpers/tasksTypes';
import SingleTask from './components/SingleTask/SingleTask';
import {useDidUpdate} from '../../hooks/useDidUpdate';
import {TasksScreenStyles} from './TasksScreen.styles';
import AppFilter from '../../components/AppFilter/AppFilter';

const TasksScreen = ({navigation}) => {
  const [filterParams, setFilterParams] = useState({
    startDate: new Date(),
    endDate: new Date(),
    category: null,
  });
  const [categories, setCategories] = useState([]);
  const RBSheetRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);

  const load = () => {
    const queryParams = {
      type: taskTypes.planedTask,
      start_date: filterParams.startDate ?? null,
      end_date: filterParams.endDate ?? null,
      category: filterParams?.category ?? null
    };
    services.tasksServices.getTasks(queryParams).then(res => {
      if (res.data) {
        setTasks(res.data);
        setLoading(false);
      }
    });
  }

  useDidUpdate(() => load(), [filterParams.startDate, filterParams.endDate, filterParams.category]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      services.categoriesServices.getCategories().then(res => {
        if (res.data) setCategories(res.data.map(i => ({label: i.name, value: i._id})));
      });
      load();
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
      })
        .catch(err => Alert.alert(err.response.data?.message || "Something went wrong. Please, try again."));
    } else {
      services.tasksServices.createTask({...params, type: taskTypes.planedTask})
        .then(res => {
          if (res.data) {
            setTasks(prevState => [res.data, ...prevState]);
            RBSheetRef.current.close();
          }
        })
        .catch(err => Alert.alert(err.response.data?.message || "Something went wrong. Please, try again."));
    }
  };

  const openForm = () => RBSheetRef.current.open();

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

  const updateFilterPrams = (type, value) => setFilterParams(prevState => ({...prevState, [type]: value}));

  const clearFilterParams = () => setFilterParams({
    startDate: new Date(),
    endDate: new Date(),
    category: null,
  });

  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Tasks" count={tasks.length}/>
      <AppFilter
        categories={categories}
        params={filterParams}
        setParams={updateFilterPrams}
        clearParams={clearFilterParams}
      />
      <View style={TasksScreenStyles.flatListWrap}>
        <FlatList
          data={tasks}
          keyExtractor={item => item._id}
          contentContainerStyle={TasksScreenStyles.flatListContainer}
          renderItem={({item}) => (
            <SingleTask
              key={item._id}
              data={item}
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