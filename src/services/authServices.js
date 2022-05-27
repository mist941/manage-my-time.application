import axios from './axios';

export default {
  signIn: async params => {
    try {
      return await axios.post('auth/sign-in', params);
    } catch (error) {
      throw error;
    }
  },
}