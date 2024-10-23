import * as SecureStore from 'expo-secure-store';
import { default as Axios } from 'axios';

const axios = Axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

axios.interceptors.request.use(
  function (config) {
    if (config.headers.Authorization) return config;

    return SecureStore.getItemAsync('token')
      .then((token) => {
        config.headers.Authorization = 'Bearer ' + token
        return config;
      })
      .catch(() => config)
  },
  function (err) {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (res) {
    res.data.status = res.status;
    return res;
  },
  function (err) {
    err.message = err.response?.data?.message;
    err.data = err.response?.data;
    err.status = err.response?.status;

    return Promise.reject(err);
  }
);

export default axios;
