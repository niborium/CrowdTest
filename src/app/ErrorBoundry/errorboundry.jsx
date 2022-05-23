import React, { Component } from 'react';

{/*
This component has three states hasError, error and errorInfo.
When an error occurs, the getDerivedStateFromError () function is called, which sets the hasError state to true, 
and based on this state, we return this component. 
We can also trigger the componentDidCatch lifecycle method to access the error and the information 
to know more about why the error occurred.

Using Error boundry in the project helps prevent the app from crashing when it encounters the error.
Instead, it can be implemented to show where we encountered errors, 
and we can work on fixing the error based on error information from the componentDidCatch life cycle method.
*/}

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
