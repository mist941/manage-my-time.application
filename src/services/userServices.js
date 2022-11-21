import axios from './axios';

export default {
  updatePushToken: async params => {
    try {
      return await axios.put('users/update_push_token', params);
    } catch (error) {
      throw error;
    }
  },
}