import { GET_ALL_BUSINESS } from './Action-Types';
import { ServiceAction, RootState } from './types';

const initialState: RootState = {
  allServices: []
};

const reducer = (state = initialState, action: ServiceAction) => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return {
        ...state,
        allServices: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
