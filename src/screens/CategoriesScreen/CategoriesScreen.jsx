import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {View} from 'react-native';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import CategoriesHeader from '../../components/CategoriesScreen/CategoriesHeader/CategoriesHeader';
import SingleCategory from '../../components/CategoriesScreen/SingleCategory/SingleCategory';
import {CategoriesScreenStyles} from './CategoriesScreen.styles';
import AddCategoryBtn from '../../components/CategoriesScreen/AddCategoryBtn/AddCategoryBtn';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentEdit, setCurrentEdit] = useState(null);

  useEffect(() => {
    services.categoriesServices.getCategories().then(res => {
      if (res.data) {
        setCategories(res.data);
        setLoading(false);
      }
    })
  }, []);

  if (loading) return <Preloader/>;

  const outsidePress = () => {
    setCurrentEdit(null);
  }

  const deleteCategory = id => {
    services.categoriesServices.deleteCategory(id).then(res => {
      if (res.status === 200) {
        setCategories(prevState => prevState.filter(category => category._id !== id));
      }
    });
  }

  const changeCategory = (id, params) => {
    services.categoriesServices.changeCategory(id, params).then(res => {
      if (res.data) {
        setCategories(prevState => prevState.map(category => category._id === id ? res.data : category));
      }
    });
  }

  const addNewCategory = () => {
    services.categoriesServices.createCategory().then(res => {
      if (res.data) setCategories(prevState => [...prevState, res.data]);
    });
  }

  return (
    <AppLayout outsidePress={outsidePress}>
      <CategoriesHeader count={categories.length}/>
      <View style={CategoriesScreenStyles.list}>
        {categories.map(category => (
          <SingleCategory
            key={category._id}
            category={category}
            setEdit={setCurrentEdit}
            isEdit={currentEdit === category._id}
            changeCategory={changeCategory}
            deleteCategory={deleteCategory}
          />
        ))}
        <AddCategoryBtn onClick={addNewCategory}/>
      </View>
    </AppLayout>
  );
};

export default CategoriesScreen;