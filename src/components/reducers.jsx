// reducers.js

import { SET_DATA } from './actions';

const initialState = {
  data: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
