import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArtists } from '../../redux/artists/actions';

class HomeContainer extends React.Component {
  static propTypes = {
    getArtists: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { state }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getArtists
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
