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

  const load = () => {
    services.categoriesServices.getCategories().then(res => {
      if (res.data) {
        setCategories(res.data);
        setLoading(false);
      }
    });
  }

  useEffect(() => load(), []);

  if (loading) return <Preloader/>;

  const outsidePress = () => {
    setCurrentEdit(null);
  }

  const deleteCategory = id => {
    services.categoriesServices.deleteCategory(id).then(res => {
      if (res.status === 200) load();
    });
  }

  const changeCategory = params => {
    console.log(params);
  }

  const addNewCategory = () => {

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