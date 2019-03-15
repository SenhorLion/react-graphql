import React from 'react';

// TODO: Log/Report the actual error
export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? (
      <div>Something went wrong, very, very wong</div>
    ) : (
      children
    );
  }
}
