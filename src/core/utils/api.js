import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
});

export const requestSignIn = async authData => {
  const { data } = await axiosInstance.post(`/auth`, authData);
  return data;
};

export const requestSignUp = async registerData => {
  const { data } = await axiosInstance.post(`/register`, registerData);
  return data;
};

export const createProfile = async cardData => {
  const { data } = await axiosInstance.post(`/card`, cardData);
  return data;
};

export const fetchProfile = async token => {
  const { data } = await axiosInstance.get(`/card?token=${token}`);
  return data;
};

export const fetchAddresses = async () => {
  const { data } = await axiosInstance.get(`/addressList`);
  return data;
};

export const fetchRoutes = async (address1, address2) => {
  const { data } = await axiosInstance.get(`/route?address1=${address1}&address2=${address2}`);
  return data;
};