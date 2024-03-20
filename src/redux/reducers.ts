import { FETCH_AI_DATA } from './actions';

const initialState = {
  aiData: null,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_AI_DATA:
      return {
        ...state,
        aiData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
