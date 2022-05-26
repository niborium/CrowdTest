import React from 'react';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';
export function Footer({ company, author, data }) {
  const {
    isLoggedIn,
    currentUser,
    userRole,
    setIsLoggedIn,
    setUserRole,
    setCurrentUser,
  } = data;

  // const handleLoginClick = (setAccount, setRole) => {
  //   setIsLoggedIn(true);
  //   setCurrentUser(setAccount);
  //   setUserRole(setRole);
  // };
  // const handleLogoutClick = () => {
  //   setIsLoggedIn(false);
  //   setUserRole('');
  //   setCurrentUser('');
  // };
  return (
    <>
      <footer>
        <p>
          {company} &copy; {author}.
        </p>

        <div className='btn-container'>
          <Button
            id='btnFaq'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#faqModal'
            style={{ float: 'right', margin: '0 1rem' }}
            text='Vanliga frågor'
          />
          {isLoggedIn && (
            <>
              <Button
                id='btnProposal1'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#proposalFormModal'
                style={{ marginLeft: '1rem' }}
                text='Nytt förbättringsförslag'
              />

              <Button
                id='btnProposal2'
                className='btn btn-primary '
                data-bs-toggle='modal'
                data-bs-target='#proposalBoardModal'
                style={{ marginLeft: '10px' }}
                text='Förbättringsförslag'
              />
            </>
          )}
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  company: propTypes.string,
  author: propTypes.string,
  data: propTypes.shape({
    currentUser: propTypes.string,
    isLoggedIn: propTypes.bool,
    userRole: propTypes.string,
    setIsLoggedIn: propTypes.func,
    setUserRole: propTypes.func,
    setCurrentUser: propTypes.func,
  }),
};
