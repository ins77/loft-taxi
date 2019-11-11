import axios from 'axios';

const BASE_URL = 'https://loft-taxi.glitch.me';

// TODO: axios instance with BASE_URL
export const requestSignIn = async authData => {
  const { data } = await axios.post(`${BASE_URL}/auth`, authData);
  return data;
};

export const requestSignUp = async registerData => {
  const { data } = await axios.post(`${BASE_URL}/register`, registerData);
  return data;
};

export const createUserCard = async cardData => {
  const { data } = await axios.post(`${BASE_URL}/card`, cardData);
  return data;
};

export const fetchAddressList = async () => {
  const { data } = await axios.get(`${BASE_URL}/addressList`);
  return data;
};

export const fetchRoute = async (address1, address2) => {
  const { data } = await axios.get(`${BASE_URL}/route?address1=${address1}&address2=${address2}`);
  return data;
};