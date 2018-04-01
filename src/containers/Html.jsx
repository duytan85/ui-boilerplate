import React from 'react';
import PropTypes from 'prop-types';

import asset from '../asset-tags.json';

function renderInitialState(initialState) {
  const innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

const HtmlContainer = ({ content, initialState }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      {initialState && renderInitialState(initialState)}
      <script src={asset.main.js} type="text/javascript" />
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
