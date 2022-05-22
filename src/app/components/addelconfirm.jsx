import React from 'react';
import * as api from '../api/api';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';

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
              />
            </div>
            <div className='m-4 modal-body'>
              <p>
                Är du säker på att du vill ta bort annons-id:{' '}
                {currentUserData.id}?
              </p>
              <Button
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => handleDelete(currentUserData.id)}
                text='radera'
              ></Button>
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

AdDelConfirm.propTypes = {
  currentUserData: propTypes.object,
  setList: propTypes.func,
};

export default AdDelConfirm;
