import React, { useEffect } from 'react';
import * as api from '../api/api';
const BidList = ({ bidList, setBidList, currentUserData }) => {
  useEffect(() => {
    setBidList(api.getBids(currentUserData.id));
  }, [currentUserData.id]);

  return (
    <>
      <div
        className='modal fade'
        id='viewbidsModal'
        tabIndex='-1'
        aria-labelledby='viewBidModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='viewbidsModal'>
                Bud för: {currentUserData?.author}
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
                      <th>Budgivare</th>
                      <th>Belopp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bidList?.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.author}</td>
                        <td>{data.totalAmount} kr</td>
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
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BidList;
