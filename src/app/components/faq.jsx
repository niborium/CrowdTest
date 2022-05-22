import React from 'react';
import Button from '../reusable-components/button';

const Faq = ({ userRole }) => {
  return (
    <>
      <div
        className='modal fade'
        id='faqModal'
        tabIndex='-1'
        aria-labelledby='faqModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='faqModal'>
                Vanliga frågor
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='m-4 modal-body'>
              <p>
                {' '}
                <br></br>Inga frågor eller svar publicerade ännu
              </p>
              {userRole === 'company' && (
                <p>
                  [Vanliga frågor för företag] <br></br>Inga frågor eller svar
                  publicerade ännu
                </p>
              )}{' '}
              {userRole === 'tester' && (
                <p>
                  [Vanliga frågor för testare] <br></br>Inga frågor eller svar
                  publicerade ännu
                </p>
              )}
            </div>
            <div className='modal-footer'>
              <button
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

export default Faq;
