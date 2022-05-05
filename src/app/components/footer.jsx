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

        <div className='btn-container'>
          <button
            id='btnFaq'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#faqModal'
            style={{ float: 'right', margin: '0 1rem' }}
          >
            Vanliga frågor
          </button>
          {isLoggedIn && (
            <>
              <button
                id='btnProposal1'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#proposalFormModal'
                style={{ marginLeft: '1rem' }}
              >
                Nytt förbättringsförslag
              </button>

              <button
                id='btnProposal2'
                className='btn btn-primary '
                data-bs-toggle='modal'
                data-bs-target='#proposalBoardModal'
                style={{ marginLeft: '10px' }}
              >
                Visa förbättringsförslag
              </button>
            </>
          )}
        </div>
      </footer>
    </>
  );
}
