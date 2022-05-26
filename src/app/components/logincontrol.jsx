import React from 'react';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';

const LoginControl = ({ data }) => {
  const {
    isLoggedIn,
    currentUser,
    userRole,
    setIsLoggedIn,
    setUserRole,
    setCurrentUser,
  } = data;

  const handleLoginClick = (setAccount, setRole) => {
    setIsLoggedIn(true);
    setCurrentUser(setAccount);
    setUserRole(setRole);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentUser('');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Button
            id='btnProfile'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#profileModal'
            text='Profil'
          />
          {userRole === 'company' ? (
            <>
              <Button
                id='btnLo'
                className='btn btn-danger'
                onClick={() => handleLogoutClick()}
                text={`Logga ut som ${currentUser}`}
              />
              <br></br>
              <br></br>
              <Button
                id='btnAf'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#adformModal'
                text='Lägg till ny annons'
              />

              <br />
              <br />
            </>
          ) : (
            <Button
              id='btnLo'
              className='btn btn-danger'
              onClick={() => handleLogoutClick()}
              text={`Logga ut som ${currentUser}`}
            />
          )}
        </>
      ) : (
        <>
          <Button
            id='btnLat'
            className='btn btn-success'
            onClick={() => handleLoginClick('testkonto-testare', 'tester')}
            text='Logga in som testare'
          />
          <br></br>
          <br></br>
          <Button
            id='btnLac'
            className='btn btn-success'
            onClick={() => handleLoginClick('testkonto-företag', 'company')}
            text='Logga in som företag'
          />
        </>
      )}
    </>
  );
};

LoginControl.propTypes = {
  data: propTypes.shape({
    isLoggedIn: propTypes.bool,
    currentUser: propTypes.string,
    userRole: propTypes.string,
    setIsLoggedIn: propTypes.func,
    setUserRole: propTypes.func,
    setCurrentUser: propTypes.func,
  }),
};
export default LoginControl;
