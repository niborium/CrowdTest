import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';
import propTypes from 'prop-types';
import 'regenerator-runtime/runtime';
import Button from '../reusable-components/button.jsx';
const ProposalForm = ({ setProposalList, update, setUpdate }) => {
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

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
      setError('Error while posting proposal');
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
                Lämna förbättringsförslag
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></Button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col'>
                    <textarea
                      className='form-control'
                      placeholder='Beskrivning'
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
                  value={submitting ? 'Skickar...' : 'Skicka'}
                />
              </form>
              {error !== '' && <Error error={error} />}
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

ProposalForm.propTypes = {
  setProposalList: propTypes.func,
  update: propTypes.bool,
  setUpdate: propTypes.func,
};

export default ProposalForm;
