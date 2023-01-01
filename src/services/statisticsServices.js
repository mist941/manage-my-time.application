import axios from './axios';

export default {
  getStatisticsByTypes: async params => {
    try {
      return await axios.get('statistics/by-types', {params});
    } catch (error) {
      throw error;
    }
  },
  getStatisticsByCategories: async params => {
    try {
      return await axios.get('statistics/by-categories', {params});
    } catch (error) {
      throw error;
    }
  },
}