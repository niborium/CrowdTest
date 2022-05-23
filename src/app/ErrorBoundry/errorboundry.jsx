import React, { Component } from 'react';

export class Errorboundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    return {
      error: error,
      errorInfo: info,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div className='error-boundry-container'>
            <h1 className='error-header'>Something went wrong</h1>
            <p className='error-message '>Error Message : {this.state.error}</p>
            <p className='error-info'>
              Error Information : {this.state.errorInfo}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Errorboundry;
