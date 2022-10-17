import * as SecureStore from 'expo-secure-store';
import { default as Axios } from 'axios';
import { API_URL } from '@env';

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'X-Requested-With': 'jracademys',
  }
});

axios.interceptors.request.use(function (config) {
  return SecureStore.getItemAsync('token')
    .then((token) => {
      config.headers.Authorization = 'bearer ' + token
      return config;
    })
    .catch(() => config)
}, function (config) {
  return Promise.reject(err);
});

axios.interceptors.response.use(function (res) {
  res.data.status = res.status;
  return res;
}, function (err) {
  err.message = err.response.data.message;
  err.data = err.response.data;

  return Promise.reject(err);
});

export default axios;
