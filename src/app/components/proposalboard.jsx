import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';

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
                Proposal Board
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='m-4 modal-body'>
              <div className='table-responsive'>
                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>#id</th>
                      <th>Description</th>
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

export default ProposalBoard;
