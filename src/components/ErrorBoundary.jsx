import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error and additional information
    console.error('ErrorBoundary caught an error', error, errorInfo);
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error is caught
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }

    // Render children components when there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;
