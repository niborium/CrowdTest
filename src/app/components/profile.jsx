import React from 'react';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';

const Profile = ({ currentUser, userRole }) => {
  return (
    <>
      <div
        className='modal fade'
        id='profileModal'
        tabIndex='-1'
        aria-labelledby='profileModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='profileModal'>
                Profil
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='m-4 modal-body'>
              <p>Användare : {currentUser}</p>
              <p>Roll : {userRole}</p>
              {userRole === 'company' && (
                <>
                  <h3>Verktyg för företag</h3>
                  <br></br>
                  <p>Inga verktyg tillgängliga ännu.</p>
                </>
              )}{' '}
              {userRole === 'tester' && (
                <>
                  <h3>Verktyg för testare</h3>
                  <br></br>
                  <p>Inga verktyg tillgängliga ännu.</p>
                </>
              )}
            </div>
            <div className='modal-footer'>
              <Button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                text='Stäng'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = {
  currentUser: propTypes.string.isRequired,
  userRole: propTypes.string.isRequired,
};

export default Profile;
