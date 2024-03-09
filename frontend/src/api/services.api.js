import axios from 'axios';
const baseURL = `${import.meta.env.VITE_SERVICES_API}/api`;

const setAuthorisationHeaders = () => {
  axios.interceptors.request.use(config => {
    // retrieve the token from the localStorage:
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

export const getAllServices = () => {
  return axios.get(`${baseURL}/services`);
};

export const getService = serviceType => {
  return axios.get(`${baseURL}/services/${serviceType}`);
};

export const addService = service => {
  return axios.post(`${baseURL}/service`, service);
};

export const deleteService = id => {
  return axios.delete(`${baseURL}/services/${id}`);
};

export const upload = image => {
  return axios.post(`${baseURL}/upload`, image);
};
