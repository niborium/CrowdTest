import React from 'react';
import { useIndexContext } from '../context/contextAPI';

const Error = () => {
  const { error, setError } = useIndexContext();

  return (
    <div className='error-container'>
      <h1 className='error-header'>Something went wrong</h1>
      <p className='error-detail'>Error message : {error}</p>
    </div>
  );
};

export default Error;
