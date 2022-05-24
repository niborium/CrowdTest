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
                {' '}
                <h5>Varför ser jag inga annonser på första sidan?</h5>
                Detta är en prototyp och har ingen testdata inlagd. För att skapa annonser måste du logga in som företag uppe till höger och skapa en annons.<br></br><br></br>
                <h5>Hur rapporterar jag förbättringsförslag och fel?</h5>
                Som inloggad användare (Testare eller företag) så kan du se och registrera förbättringsförslag i footer (längst nere på skärmen).<br></br>
                Vill du däremot rapportera ett fel så kan du kontakta oss eller registrera ett Issue via Github repot.<br></br><br></br>
                <h5>Vart sparas informationen?</h5>
                Företag skapar annons (sparas i localStorage).<br></br>
                Testare/Företag skapar förbättringsförslag (lagras i mockapi - extern REST API)<br></br>
                Testare registrerar bud (lagras i mockapi - extern REST API)<br></br><br></br>
                <h5>Vart kan jag läsa mer om affärsidén/plattformen och alla tilltänkta funktioner?</h5>
                <a href='/index.html'>Läs mer här</a>. Den fullständiga plattformen innehåller mer avancerade funktioner.<br></br><br></br>
              {userRole === 'company' && (
                <>
                  <h5>Vad kan jag göra som företag? (Inloggad)</h5>
                  Skapa annonser, visa aktuella bud för annonser, redigera dina annonser, lämna förbättringsförslag och visa förbättringsförslag.<br></br>
                  Detta är en avskalad version (prototyp) som saknar viss funktionalitet.<br></br><br></br>
                </>
              )}{' '}
              {userRole === 'tester' && (
                <>
                <h5>Vad kan jag göra som testare? (Inloggad)</h5>
                Lämna bud, visa aktuella bud för annonser, lämna förbättringsförslag och visa förbättringsförslag.<br></br>
                Detta är en avskalad version (prototyp) som saknar viss funktionalitet.<br></br><br></br>
                </>
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
