import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';

import configureStore from './store/configureStore';
import Html from './containers/Html';
import App from './containers/App';

export default (req, res) => {
  const store = configureStore();
  const staticContext = {
    status: 200,
    store
  };

  const componentHtml = initialStore => ReactDOMServer.renderToString( // eslint-disable-line function-paren-newline
    <Provider store={initialStore}>
      <Router location={req.url} context={staticContext}>
        <App />
      </Router>
    </Provider>
  );

  const rootMarkup = ReactDOMServer.renderToString(<Html
    content={componentHtml(store)}
    initialState={staticContext.store.getState()}
  />);

  res
    .status(staticContext.status)
    .send(`<!DOCTYPE html>${rootMarkup}`);
};
