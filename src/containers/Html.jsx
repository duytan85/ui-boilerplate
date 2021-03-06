import React from 'react';
import PropTypes from 'prop-types';

import asset from '../asset-manifest.json';

function renderInitialState(initialState) {
  const innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

const HtmlContainer = ({ content, initialState }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Isomorphic React Boilerplate</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      {initialState && renderInitialState(initialState)}
      <script src={asset.vendors.js} />
      <script src={asset.main.js} />
    </body>
  </html>
);

HtmlContainer.propTypes = {
  content: PropTypes.string.isRequired,
  initialState: PropTypes.shape({})
};

HtmlContainer.defaultProps = {
  initialState: {}
};

export default HtmlContainer;
