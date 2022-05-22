import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';
import propTypes from 'prop-types';
import Button from '../reusable-components/button.jsx';
import { useIndexContext } from '../context/contextAPI.js';
const BidForm = ({ currentUserData, setBidList }) => {
  const [hours, setHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const { fetchBids } = useIndexContext();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await api.postBid(
        currentUserData.id,
        currentUserData.author,
        hours * hourlyRate
      );
      await fetchBids();

      setHours(0);
      setHourlyRate(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className='modal fade'
        id='bidformModal'
        tabIndex='-1'
        aria-labelledby='bidformModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='bidformModal'>
                Bud från användare: {currentUserData?.author}
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor='hours'>Antal timmar</label>
                    <input
                      name='hours'
                      id='hours'
                      className='form-control'
                      placeholder='Description'
                      type='number'
                      rows='10'
                      cols='80'
                      required
                      value={hours}
                      onChange={(event) => setHours(event.target.value)}
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor='hourlyRate'>Ange timpris</label>
                    <input
                      id='hourlyRate'
                      name='hourlyRate'
                      className='form-control'
                      placeholder='Description'
                      rows='10'
                      cols='80'
                      type={'number'}
                      required
                      value={hourlyRate}
                      onChange={(event) => setHourlyRate(event.target.value)}
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <input
                      placeholder={`totalt :  ${hours * hourlyRate}`}
                      rows='10'
                      cols='80'
                    ></input>
                    <br />
                    <br />
                  </div>
                </div>

                <input
                  type='submit'
                  className='btn btn-primary mb-3'
                  value={'Ange bud'}
                />
              </form>
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

BidForm.propTypes = {
  currentUserData: propTypes.object,
  setBidList: propTypes.func,
};

export default BidForm;
