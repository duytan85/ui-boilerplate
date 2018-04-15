import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import artists from './artists/reducers';

export default combineReducers({
  router: routerReducer,
  artists
});
