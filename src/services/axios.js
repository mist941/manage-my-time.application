import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosApiInstance = axios.create();

const currentUser = AsyncStorage.getItem('@logged_user');

const addAccessTokenToRequestsHeader = (agent, user) => {
  if (user) {
    agent.defaults.headers['user'] = JSON.stringify(user);
  }
};

addAccessTokenToRequestsHeader(axiosApiInstance, currentUser);

axiosApiInstance.interceptors.request.use(
  async config => {
    config.withCredentials = true;
    config.baseURL = 'http://192.168.0.101:3005/v1'
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default axiosApiInstance;