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

export const addServiceId = async (massageId, userId) => {
  return axios.post(`${baseURL}/services/addmassagebyid`, {
    massageId: massageId,
    userId: userId,
  });
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

export const getMassage = itemId => {
  return axios.get(`${baseURL}/services/oneItem/${itemId}`);
};

export const addBooking = async (user, massage, date, time) => {
  return axios.post(`${baseURL}/services/newbooking`, {
    user: user,
    massage: massage,
    date: date,
    time: time,
  });
};

export const deleteBooking = async (userId, bookingId) => {
  return axios.delete(
    `${baseURL}/services/users/${userId}/bookings/${bookingId}`
  );
};
