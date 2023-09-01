import { GET_ALL_BUSINESS } from './Action-Types';

export type ServiceAction = {
  type: typeof GET_ALL_BUSINESS;
  payload: any;
};

export type RootState = {
  allServices: any[]; 
};
