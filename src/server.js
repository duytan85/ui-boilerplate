import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';

import configureStore from './store/configureStore';
import Html from './containers/Html';
import App from './containers/App';
import ErrorBoundary from './components/ErrorBoundary';

export default (req, res) => {
  const store = configureStore({
    initialState: undefined,
    isClient: false
  });
  const staticContext = {
    status: 200,
    store
  };

  const componentHtml = (initialStore) =>
    ReactDOMServer.renderToString(
      <Provider store={initialStore}>
        <Router location={req.url} context={staticContext}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Router>
      </Provider>
    );

  const rootMarkup = ReactDOMServer.renderToString(
    <Html
      content={componentHtml(store)}
      initialState={staticContext.store.getState()}
    />
  );

  res.status(staticContext.status).send(`<!DOCTYPE html>${rootMarkup}`);
};
