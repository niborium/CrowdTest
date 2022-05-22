import React, { useState, useEffect } from 'react';
import Button from '../reusable-components/button';
import * as api from '../api/api';
import propTypes from 'prop-types';

const AdEditForm = ({ currentUserData, list, setList }) => {
  const toEdit = list.filter((item) => item.id === currentUserData.id)[0];

  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let selecteddevices = Array.from(
      document.querySelectorAll('[id=phones]:checked')
    );
    let values = selecteddevices.map((el) => el.value);
    let devices = values.join(', ');
    api.editAd({
      ...toEdit,
      ...data,
      devicetotest: devices || toEdit.devicetotest,
    });
    let inputs = document.querySelectorAll('[id=phones]:checked');
    inputs.forEach((item) => {
      item.checked = false;
    });

    setList(api.getAllpost());
  };
  return (
    <>
      <div
        className='modal fade'
        id='adEditForm'
        tabIndex='-1'
        aria-labelledby='adEditFormLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='adEditFormModal'>
                Edit ad - id: {toEdit?.id}
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
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Titel'
                      required
                      defaultValue={toEdit?.title}
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <textarea
                      className='form-control'
                      placeholder='Beskrivning'
                      rows='4'
                      cols='50'
                      required
                      defaultValue={toEdit?.description}
                      onChange={(event) =>
                        setData({ ...data, description: event.target.value })
                      }
                    ></textarea>
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <fieldset />
                    <legend>Enheter att testa på</legend>
                    Apple iPhone 13:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Apple iPhone 13'
                    />
                    <br></br>
                    Apple iPhone 13 Pro Max:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Apple iPhone 13 Pro Max'
                    />
                    <br></br>
                    Apple iPhone 13 Pro:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Apple iPhone 13 Pro'
                    />
                    <br></br>
                    Apple iPhone 12:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Apple iPhone 12'
                    />
                    <br></br>
                    Apple Samsung Galaxy S21:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Apple Samsung Galaxy S21'
                    />
                    <br></br>
                    Samsung Galaxy S21 Ultra:{' '}
                    <input
                      type='checkbox'
                      id='phones'
                      value='Samsung Galaxy S21 Ultra'
                    />
                    <br></br>
                    Google Pixel 5:{' '}
                    <input type='checkbox' id='phones' value='Google Pixel 5' />
                    <br></br>
                    OnePlus 8:{' '}
                    <input type='checkbox' id='phones' value='OnePlus 8' />
                    <br></br>
                    <fieldset />
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Budget'
                      min='1'
                      required
                      defaultValue={toEdit?.budget}
                      onChange={(event) =>
                        setData({ ...data, budget: event.target.value })
                      }
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Antal testare'
                      min='1'
                      required
                      defaultValue={toEdit?.nroftesters}
                      onChange={(event) =>
                        setData({ ...data, nroftesters: event.target.value })
                      }
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Startdatum för test
                    <input
                      type='date'
                      className='form-control'
                      required
                      // max={enddate}
                      defaultValue={toEdit?.startdate}
                      onChange={(event) =>
                        setData({ ...data, startdate: event.target.value })
                      }
                    />
                    <br></br>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Slutdatum för test
                    <input
                      type='date'
                      className='form-control'
                      required
                      min={toEdit?.startdate}
                      defaultValue={toEdit?.enddate}
                      onChange={(event) =>
                        setData({ ...data, enddate: event.target.value })
                      }
                    />
                    <br></br>
                  </div>
                </div>
                <br></br>
                <input
                  type='submit'
                  className='btn btn-primary mb-3'
                  value='edit ad'
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

export default AdEditForm;
