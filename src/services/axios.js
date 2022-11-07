import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    const currentUser = await AsyncStorage.getItem('@logged_user');
    if (currentUser) {
      config.headers['user'] = JSON.stringify(currentUser);
    }
    config.withCredentials = true;
    config.baseURL = 'http://192.168.0.101:3005/v1'
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default axiosApiInstance;