import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    const currentUser = await AsyncStorage.getItem('@logged_user');
    if (currentUser) {
      config.headers['user'] = JSON.stringify(currentUser);
    }
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    config.withCredentials = true;
    config.baseURL = 'https://manage-my-timeapi-production.up.railway.app/v1'
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default axiosApiInstance;