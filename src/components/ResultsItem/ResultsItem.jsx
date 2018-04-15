import React from 'react';
import PropTypes from 'prop-types';

const ResultsItem = (props) => {
  const { artistName } = props;

  return (
    <li>{ artistName }</li>
  );
};

ResultsItem.propTypes = {
  artistName: PropTypes.string.isRequired
};

export default ResultsItem;
