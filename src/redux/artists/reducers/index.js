import cloneDeep from 'lodash.clonedeep';

import {
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAILURE
} from '../constants';

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
    case GET_ARTISTS_REQUEST: {
      newState.ui.isRequesting = true;
      return newState;
    }
    case GET_ARTISTS_SUCCESS: {
      newState.ui.isRequesting = false;
      newState.data = action.payload;
      return newState;
    }
    case GET_ARTISTS_FAILURE: {
      newState.ui.isRequesting = false;
      newState.error = action.error;
      return newState;
    }
    default: {
      return state;
    }
  }
};
