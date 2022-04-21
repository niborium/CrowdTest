import React from 'react';

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
;
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentUser('');
  };

  if (isLoggedIn === false) {
    return (
      <>
        <button
          id='btnLat'
          className='btn btn-success'
          onClick={() => handleLoginClick('testkonto-testare', 'tester')}
        >
          Logga in som testare
        </button>
        <br></br>
        <br></br>
        <button
          id='btnLac'
          className='btn btn-success'
          onClick={() => handleLoginClick('testkonto-företag', 'company')}
        >
          Logga in som företag
        </button>
      </>
    );
  } else if (userRole === 'company') {
    return (
      <>
        <button
          id='btnLo'
          className='btn btn-danger'
          onClick={() => handleLogoutClick()}
        >
          Logga ut som {currentUser}
        </button>
        <br></br>
        <br></br>
        <button
          id='btnAf'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#adformModal'
        >
          Lägg till ny annons
        </button>
      </>
    );
  } else {
    return (
      <button
        id='btnLo'
        className='btn btn-danger'
        onClick={() => handleLogoutClick()}
      >
        Logga ut som {currentUser}
      </button>
    );
  }
};
export default LoginControl;
