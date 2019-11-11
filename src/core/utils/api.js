import axios from 'axios';

const BASE_URL = 'https://loft-taxi.glitch.me';

// TODO: axios instance with BASE_URL
export const requestSignIn = async authData => {
  const { data } = await axios.post(`${BASE_URL}/auth`, authData);
  return data;
};
