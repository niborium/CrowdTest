import React from 'react';
import LoginControl from '../components/logincontrol.jsx';

export function Header(props) {
  return (
    <div className='p-3 mb-2 bg-dark text-white' id='header'>
      <h1>{props.title}</h1>
      <LoginControl data={props.props} />
    </div>
  );
}
