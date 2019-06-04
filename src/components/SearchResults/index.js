import React from 'react';
import PropTypes from 'prop-types';

import ResultsItem from '../ResultsItem';

const SearchResultsComponent = (props) => {
  const { isRequesting, resultCount, results } = props;

  if (isRequesting) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>
Number of results:
        { resultCount }
      </div>
      <ul>
        {
          results.map(obj => (
            <ResultsItem
              key={obj.artistId}
              artistName={obj.artistName}
            />
          ))
        }
      </ul>
    </div>
  );
};

SearchResultsComponent.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  resultCount: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default SearchResultsComponent;
