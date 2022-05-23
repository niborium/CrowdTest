import React, { useState, useEffect } from 'react';
import * as api from '../api/api.js';
import propTypes from 'prop-types';
import Button from '../reusable-components/button.jsx';
function AdBoard({ data }) {
  const { currentUser, userRole, update, list, setList, setCurrentUserData } =
    data;

  const tick = () => {
    setList(api.getAllpost());
  };

  useEffect(() => {
    tick();
  }, [update]);
  return (
    <>
      <p>Välkommen {currentUser}!</p>
      <div className='m-4'>
        <div className='table-responsive'>
          <table className='table table-dark table-striped'>
            <thead>
              <tr>
                <th>#id</th>
                <th>Titel:</th>
                <th>Beskrivning:</th>
                <th>Enheter att testa på:</th>
                <th>Budget:</th>
                <th>Antal testare som behövs:</th>
                <th>Startdatum:</th>
                <th>Slutdatum:</th>
                <th>Publicerad av:</th>
                {userRole === 'tester' ? <th>Lämna bud</th> : null}
                {userRole === 'tester' || userRole === 'company' ? (
                  <th>Visa bud</th>
                ) : null}
                {userRole === 'company' ? <th>Radera</th> : null}
                {userRole === 'company' ? <th>Redigera</th> : null}
              </tr>
            </thead>
            <tbody>
              {list?.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.devicetotest}</td>
                  <td>{data.budget}</td>
                  <td>{data.nroftesters}</td>
                  <td>{data.startdate}</td>
                  <td>{data.enddate}</td>
                  <td>{data.author}</td>
                  {userRole === 'tester' ? (
                    <td>
                      <Button
                        id='btnBf'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#bidformModal'
                        onClick={() =>
                          setCurrentUserData({
                            id: data.id,
                            author: data.author,
                          })
                        }
                        text='Lämna bud'
                      />
                    </td>
                  ) : null}
                  {userRole === 'tester' || userRole === 'company' ? (
                    <td>
                      <Button
                        id='btnBf'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#viewbidsModal'
                        onClick={() =>
                          setCurrentUserData({
                            id: data.id,
                            author: data.author,
                          })
                        }
                        text='Visa bud'
                      />
                    </td>
                  ) : null}
                  {userRole === 'company' && (
                    <>
                      <td>
                        <Button
                          id='btnDelete'
                          className='btn btn-danger'
                          data-bs-toggle='modal'
                          data-bs-target='#deleteModal'
                          onClick={() =>
                            setCurrentUserData({
                              id: data.id,
                              author: data.author,
                            })
                          }
                          text={'Radera'}
                        />
                      </td>
                      <td>
                        <Button
                          className='btn btn-primary'
                          data-bs-toggle='modal'
                          data-bs-target='#adEditForm'
                          onClick={() =>
                            setCurrentUserData({
                              id: data.id,
                              author: data.author,
                            })
                          }
                          text='Redigera'
                        />
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

AdBoard.propTypes = {
  data: propTypes.shape({
    currentUser: propTypes.string,
    userRole: propTypes.string,
    update: propTypes.bool,
    list: propTypes.array,
    setList: propTypes.func,
    setCurrentUserData: propTypes.func,
  }),
};

export default AdBoard;
