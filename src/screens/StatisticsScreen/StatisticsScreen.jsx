import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppFilter from '../../components/AppFilter/AppFilter';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import {taskTypes} from '../../helpers/tasksTypes';
import {useDidUpdate} from '../../hooks/useDidUpdate';
import StatisticsByTypes from './components/StatisticsByTypes/StatisticsByTypes';
import StatisticsByCategories from './components/StatisticsByCategories/StatisticsByCategories';

const StatisticsScreen = ({navigation}) => {
  const [filterParams, setFilterParams] = useState({
    startDate: new Date(new Date().setUTCMonth(0)),
    endDate: new Date(new Date().setUTCMonth(11)),
    category: null,
  });
  const [categories, setCategories] = useState([]);
  const [statistics, setStatistics] = useState({
    by_types: {completed_tasks_count: 0, closed_tasks_count: 0},
    by_categories: [],
  });
  const [loading, setLoading] = useState(true);


  const load = async () => {
    const queryParams = {
      type: taskTypes.planedTask,
      start_date: filterParams?.startDate ?? null,
      end_date: filterParams?.endDate ?? null,
      category: filterParams?.category ?? null
    };
    const statisticsByTypes = await services.statisticsServices.getStatisticsByTypes(queryParams).then(res => res.data);
    const statisticsByCategories = await services.statisticsServices.getStatisticsByCategories(queryParams).then(res => res.data || []);

    setStatistics({
      by_types: statisticsByTypes,
      by_categories: statisticsByCategories,
    });
    setLoading(false);
  }

  useEffect(() => {
    return navigation.addListener('focus', () => {
      services.categoriesServices.getCategories().then(res => {
        if (res.data) setCategories(res.data.map(i => ({label: i.name, value: i._id})));
      });
      load();
    });
  }, [navigation]);

  useDidUpdate(() => load(), [filterParams]);

  const updateFilterPrams = (type, value) => setFilterParams(prevState => ({...prevState, [type]: value}));

  const clearFilterParams = () => setFilterParams({
    startDate: new Date(new Date().setUTCMonth(0)),
    endDate: new Date(new Date().setUTCMonth(11)),
    category: null,
  });

  if (loading) return <Preloader/>;

  return (
    <AppLayout>
      <PageHeader name="Statistics"/>
      <AppFilter
        categories={categories}
        params={filterParams}
        setParams={updateFilterPrams}
        clearParams={clearFilterParams}
      />
      <StatisticsByTypes statistics={statistics} filterParams={filterParams} categories={categories}/>
      <StatisticsByCategories statistics={statistics} filterParams={filterParams}/>
    </AppLayout>
  );
};

export default StatisticsScreen;