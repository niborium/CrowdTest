import React from 'react';

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
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='m-4 modal-body'>
              <h3>Användare : {currentUser}</h3>
              <h4>Roll : {userRole}</h4>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
