import React from 'react';
import * as api from '../api/api';

const AdDelConfirm = ({ currentUserData, setList }) => {
  const handleDelete = (id) => {
    api.deleteAd(id);
    setList(api.getAllpost());
  };
  return (
    <>
      <div
        className='modal fade'
        id='deleteModal'
        tabIndex='-1'
        aria-labelledby='deleteModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='deleteModal'>
                Bekräfta radering
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='m-4 modal-body'>
              <p>
                Är du säker på att du vill ta bort annons-id: {currentUserData.id}?
              </p>
              <button
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => handleDelete(currentUserData.id)}
              >
                Radera
              </button>
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

export default AdDelConfirm;
