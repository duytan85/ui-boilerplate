import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorInfo: info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>Something went wrong.</h1>
          <p>{ this.state.errorInfo.componentStack }</p>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
