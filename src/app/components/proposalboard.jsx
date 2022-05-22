import React, { useEffect } from 'react';
import * as api from '../api/api.js';
import propTypes from 'prop-types';
import Button from '../reusable-components/button.jsx';

const ProposalBoard = ({ proposalList, setProposalList, update }) => {
  useEffect(() => {
    api
      .getAllProposal()
      .then((res) => setProposalList(res))
      .catch((err) => console.error(err));
  }, [update]);
  return (
    <>
      <div
        className='modal fade'
        id='proposalBoardModal'
        tabIndex='-1'
        aria-labelledby='proposalBoardModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='proposalFormModal'>
                Förbättringsförslag
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></Button>
            </div>
            <div className='m-4 modal-body'>
              <div className='table-responsive'>
                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>#id</th>
                      <th>Beskrivning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposalList?.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.Description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

ProposalBoard.propTypes = {
  proposalList: propTypes.array,
  setProposalList: propTypes.func,
  update: propTypes.bool,
};

export default ProposalBoard;
