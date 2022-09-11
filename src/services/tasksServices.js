import axios from './axios';

export default {
  getTasks: async params => {
    try {
      return await axios.get('tasks/', {params});
    } catch (error) {
      throw error;
    }
  },
  deleteTask: async id => {
    try {
      return await axios.delete(`tasks/${id}`);
    } catch (error) {
      throw error;
    }
  },
  createTask: async params => {
    try {
      return await axios.post('tasks', params);
    } catch (error) {
      throw error;
    }
  },
  changeTask: async (id, params) => {
    try {
      return await axios.put(`tasks/${id}`, params);
    } catch (error) {
      throw error;
    }
  },
}