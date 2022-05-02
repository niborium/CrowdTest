import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';
const BidForm = ({ currentUserData, setBidList }) => {
  const [hours, setHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      api.postBid(
        currentUserData.id,
        currentUserData.author,
        hours * hourlyRate
      );
      setHours(0);
      setHourlyRate(0);
      setBidList(api.getBids(currentUserData.id));
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
                Ange bud för: {currentUserData?.author}
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
                    <p>Antal timmar:</p>
                    <input
                      className='form-control'
                      placeholder='Antal timmar'
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
                    <p>Timpris:</p>
                    <input
                      className='form-control'
                      placeholder='Timpris'
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
                      className='form-control'
                      placeholder={
                        hours > 0 && hourlyRate > 0
                          ? hours * hourlyRate
                          : '{Belopp}'
                      }
                      rows='10'
                      cols='80'
                      value={
                        hours > 0 && hourlyRate > 0
                          ? hours * hourlyRate
                          : '{Belopp}'
                      }
                    ></input>
                    <br />
                    <br />
                  </div>
                </div>

                <input
                  type='submit'
                  className='btn btn-primary mb-3'
                  value={'Skicka'}
                />
              </form>
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

export default BidForm;
