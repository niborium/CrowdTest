import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';
import 'regenerator-runtime/runtime';
const ProposalForm = ({ setProposalList, update, setUpdate }) => {
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      api.postProposal(description).then(() => {
        setSubmitting(false);
        setUpdate(!update);
        setDescription('');
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className='modal fade'
        id='proposalFormModal'
        tabIndex='-1'
        aria-labelledby='proposalformModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='proposalFormModal'>
                Proposal form
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col'>
                    <textarea
                      className='form-control'
                      placeholder='Description'
                      rows='10'
                      cols='80'
                      required
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                    <br></br>
                  </div>
                </div>
                <input
                  type='submit'
                  className='btn btn-primary mb-3'
                  value={submitting ? 'Submitting...' : 'Submit'}
                />
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProposalForm;
