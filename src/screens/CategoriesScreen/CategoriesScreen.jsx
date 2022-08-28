import React, {useEffect, useState} from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import services from '../../services';
import Preloader from '../../components/Preloader/Preloader';
import SingleCategory from './components/SingleCategory/SingleCategory';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddButton from '../../components/AddButton/AddButton';
import ScrollListWrapper from '../../components/ScrollListWrapper/ScrollListWrapper';

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

  if (loading) return <Preloader/>;

  return (
    <AppLayout outsidePress={outsidePress}>
      <PageHeader name="Categories" count={categories.length}/>
      <ScrollListWrapper>
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
      </ScrollListWrapper>
      <AddButton onClick={addNewCategory}/>
    </AppLayout>
  );
};

export default CategoriesScreen;