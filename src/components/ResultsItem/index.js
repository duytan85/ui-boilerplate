import React from 'react';
import PropTypes from 'prop-types';

const ResultsItemComponent = (props) => {
  const { artistName } = props;

  return <li>{artistName}</li>;
};

ResultsItemComponent.propTypes = {
  artistName: PropTypes.string.isRequired
};

export default ResultsItemComponent;
