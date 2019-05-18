import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArtists } from '../../redux/artists/actions';
import SearchArtistsComponent from '../../components/SearchArtists';
import SearchResultsComponent from '../../components/SearchResults';

const RootContainer = (props) => {
  const { isRequesting, resultCount, results } = props;

  return (
    <div>
      <SearchArtistsComponent
        getArtists={props.getArtists}
      />
      <SearchResultsComponent
        isRequesting={isRequesting}
        resultCount={resultCount}
        results={results}
      />
    </div>
  );
};

RootContainer.defaultProps = {
  resultCount: 0,
  results: []
};

RootContainer.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  resultCount: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape()),
  getArtists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isRequesting: state.artists.ui.isRequesting,
  resultCount: state.artists.data.resultCount,
  results: state.artists.data.results
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArtists
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
