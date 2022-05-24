import React from 'react';
import propTypes from 'prop-types';
import Button from '../reusable-components/button';

const Profile = ({ currentUser, userRole }) => {
  return (
    <>
      <div
        className='modal fade'
        id='profileModal'
        tabIndex='-1'
        aria-labelledby='profileModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='profileModal'>
                Profil
              </h5>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='m-4 modal-body'>
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="150" height="150"></img><br></br><br></br><br></br>
              <p>Användare : {currentUser}</p>
              <p>Roll : {userRole}</p>
              {userRole === 'company' && (
                <>
                  <h3>Verktyg för företag</h3>
                  <br></br>
                  <button type="button" class="btn btn-secondary">Meddelandecenter (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Ändra profilbild (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Ändra lösenord (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Statistik (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Dispyter (annonser) (Ej tillgänglig ännu)</button><br></br><br></br>  
                </>
              )}{' '}
              {userRole === 'tester' && (
                <>
                  <h3>Verktyg för testare</h3>
                  <br></br>
                  <button type="button" class="btn btn-secondary">Meddelandecenter (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Ändra profilbild (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Ändra lösenord (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Statistik (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Dispyter (annonser) (Ej tillgänglig ännu)</button><br></br><br></br>
                  <button type="button" class="btn btn-secondary">Enheter (som du kan testa på) (Ej tillgänglig ännu)</button><br></br><br></br>  
                </>
              )}
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

Profile.propTypes = {
  currentUser: propTypes.string.isRequired,
  userRole: propTypes.string.isRequired,
};

export default Profile;
