import React from 'react';

export function Footer({ company, author, data }) {
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
      <footer>
        <p>
          {company} &copy; {author}.
        </p>
        {isLoggedIn && (
          <div className='btn-container'>
            <button
              id='btnProposal1'
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#proposalFormModal'
              style={{ marginLeft: '10px' }}
            >
              new proposal
            </button>

            <button
              id='btnProposal2'
              className='btn btn-primary '
              data-bs-toggle='modal'
              data-bs-target='#proposalBoardModal'
              style={{ marginLeft: '10px' }}
            >
              Proposal list
            </button>
          </div>
        )}
      </footer>
    </>
  );
}
