import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootReducer from '../redux/rootReducer';

export let history; // eslint-disable-line import/no-mutable-exports

const sagaMiddleware = createSagaMiddleware();

const enhancer = () => {
  if (__DEV__) {
    return compose(
      applyMiddleware(sagaMiddleware),
      typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    );
  }

  return compose(applyMiddleware(sagaMiddleware));
};

export default function configureStore({ initialState, isClient = false }) {
  if (isClient) {
    history = createBrowserHistory();
  }

  const store = createStore(rootReducer, initialState, enhancer());

  if (module.hot) {
    module.hot.accept('../redux/rootReducer', () => {
      const nextRootReducer = require('../redux/rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;

  return store;
}
