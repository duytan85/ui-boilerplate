import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';
import rootSaga from './redux/rootSaga';
import ErrorBoundary from './components/ErrorBoundary';
import App from './containers/App';

const store = configureStore({
  initialState: window.__INITIAL_STATE__,
  isClient: true
});

store.runSaga(rootSaga);

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) module.hot.accept();
