import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: 'https://managemytime-api.netxill.com/v1'
});

export default axiosApiInstance;