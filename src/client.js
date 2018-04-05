import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import configureStore, { history } from './store/configureStore';
import rootSaga from './redux/rootSaga';
import ErrorBoundary from './components/ErrorBoundary';
import App from './containers/App';

const store = configureStore(window.__INITIAL_STATE__);

store.runSaga(rootSaga);

hydrate(
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) module.hot.accept();
