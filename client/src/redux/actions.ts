import axios from 'axios';
import { GET_ALL_SERVICES } from './Action-Types';
import { ServiceAction } from './types';

const API_URL = 'http://localhost:3001/';

export const GetAllServices = () => {
  const endpoint = `${API_URL}services/`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint);
      console.log(data);

      return dispatch({
        type: GET_ALL_SERVICES,
        payload: data,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
