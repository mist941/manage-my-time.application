import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {View} from 'react-native';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import CategoriesHeader from '../../components/CategoriesScreen/CategoriesHeader/CategoriesHeader';
import SingleCategory from '../../components/CategoriesScreen/SingleCategory/SingleCategory';
import {CategoriesScreenStyles} from './CategoriesScreen.styles';

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
            deleteCategory={deleteCategory}
          />
        ))}
      </View>
    </AppLayout>
  );
};

export default CategoriesScreen;