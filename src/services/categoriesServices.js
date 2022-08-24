import axios from './axios';

export default {
  getCategories: async () => {
    try {
      return await axios.get('categories');
    } catch (error) {
      throw error;
    }
  },
  deleteCategory: async id => {
    try {
      return await axios.delete(`categories/${id}`);
    } catch (error) {
      throw error;
    }
  },
  createCategory: async () => {
    try {
      return await axios.post(`categories`);
    } catch (error) {
      throw error;
    }
  },
  changeCategory: async (id, params) => {
    try {
      return await axios.put(`categories/${id}`, params);
    } catch (error) {
      throw error;
    }
  },
}