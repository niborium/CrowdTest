import React from 'react';
import * as api from '../api/api';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';
import { useIndexContext } from '../context/contextAPI';
import Error from './Error';
const BidList = ({ bidList, setBidList, currentUserData }) => {
  bidListFiltered = bidList?.filter((bid) => bid.user === currentUserData.id);
  const { error, currentUser, userRole } = useIndexContext();
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
                Aktuella bud:
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
                      <th>Budgivare</th>
                      <th>Belopp</th>
                      {userRole === 'company' ? (
                        <th>Välj testare</th>
                      ) : null}
                    </tr>
                  </thead>
                  {error !== '' && <Error error={error} />}
                  <tbody>
                    {bidListFiltered?.map((data) => (
                      <tr key={data?.id}>
                        <td>{data?.id}</td>
                        <td>{data?.author}</td>
                        <td>{data?.totalAmount} kr</td>
                        {userRole === 'company' ? (
                        <td><button type="button" className="btn btn-secondary">Välj testare (Ej tillgänglig ännu)</button></td>
                      ) : null}
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

BidList.propTypes = {
  bidList: propTypes.array,
  setBidList: propTypes.func,
  currentUserData: propTypes.object,
};
export default BidList;
