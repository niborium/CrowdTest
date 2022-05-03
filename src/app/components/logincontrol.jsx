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
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentUser('');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <button
            id='btnProfile'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#profileModal'
          >
            Profil
          </button>
          {userRole === 'company' ? (
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

              <br />
              <br />
            </>
          ) : (
            <button
              id='btnLo'
              className='btn btn-danger'
              onClick={() => handleLogoutClick()}
            >
              Logga ut som {currentUser}
            </button>
          )}
        </>
      ) : (
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
      )}
    </>
  );
};
export default LoginControl;
