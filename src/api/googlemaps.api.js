import axios from 'axios';
const baseURL = `${import.meta.env.VITE_SERVICES_API}/api`;

const setAuthorisationHeaders = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });
};

setAuthorisationHeaders();

export const getGoogleMaps = () => {
  return axios.get(`${baseURL}/key`);
};
