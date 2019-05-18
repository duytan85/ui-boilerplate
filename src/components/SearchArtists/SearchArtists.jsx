import React from 'react';
import PropTypes from 'prop-types';

class SearchArtistsComponent extends React.Component {
  static propTypes = {
    getArtists: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const { getArtists } = this.props;
    const { query } = this.state;

    getArtists(query);
    event.preventDefault();
  }

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="txtSearchQuery">
          Seach artists on iTunes:
          <input id="txtSearchQuery" type="text" value={query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchArtistsComponent;
