import React from 'react';

{/*
Komponenten som görs återanvändbar i detta projekt är för Button. 
Vi fick situationen att vi måste skapa olika typer av knappar efter projektets behov. 
Så den återanvändbara komponenten är gjord för den som kan användas var som helst i appen genom att importera den.
För att använda den här återanvändbara knappen bör vi importera den till komponentfilen där vi behöver knappen. 
Sedan kan vi skicka props till den enligt kraven. onClick-funktionalitet kan också läggas till den helt enkelt genom att skicka props. 
Allt som skickas till text props kommer att visas som knapp. Vi kan skicka className, css eller vad som helst som props till den.
*/}

const Button = (props) => {
  return (
    <>
      <button {...props}>{props.text}</button>
    </>
  );
};

export default Button;