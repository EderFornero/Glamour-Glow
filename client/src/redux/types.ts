import { GET_ALL_SERVICES } from './Action-Types';

export type ServiceAction = {
  type: typeof GET_ALL_SERVICES;
  payload: any;
};

export type RootState = {
  allServices: any[]; // Define el tipo de allServices según tus necesidades
};
