import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  // https://www.reddit.com/r/reactjs/comments/9lp0k3/new_lifecycle_method_getderivedstatefromerror/e79elpl/
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          {this.state.error}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
