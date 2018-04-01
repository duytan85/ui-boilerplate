import cloneDeep from 'lodash.clonedeep';

import {
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE
} from './constants';

const initialState = {
  ui: {
    isRequesting: false
  },
  data: {},
  error: null
};

export default (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case GET_DETAILS_REQUEST: {
      newState.ui.isRequesting = true;
      return newState;
    }
    case GET_DETAILS_SUCCESS: {
      newState.ui.isRequesting = false;
      newState.data.products = action.payload.data.products;
      return newState;
    }
    case GET_DETAILS_FAILURE: {
      newState.ui.isRequesting = false;
      newState.error = action.error;
      return newState;
    }
    default: {
      return state;
    }
  }
};
