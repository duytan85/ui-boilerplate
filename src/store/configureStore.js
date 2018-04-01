import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../redux/rootReducer';

export let history; // eslint-disable-line import/no-mutable-exports
let routingMiddleware = routerMiddleware();
const sagaMiddleware = createSagaMiddleware();

if (__CLIENT__) {
  history = createHistory();
  routingMiddleware = routerMiddleware(history);
}

const enhancer = () => {
  if (__DEV__) {
    return compose(
      applyMiddleware(routingMiddleware),
      applyMiddleware(sagaMiddleware),
      typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );
  }

  return compose(
    applyMiddleware(routingMiddleware),
    applyMiddleware(sagaMiddleware)
  );
};

export default function configureStore(initialState) {
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
