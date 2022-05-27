# CrowdTest

1. Uppe till höger i repot (https://github.com/niborium/CrowdTest) så kan du trycka på Code. Här kan du välja att ladda ner (Download ZIP) eller välja att klona ner repot med git clone.
2. Öppna projektet i din valda kodeditor.
3. Kör därefter `npm ci ` i terminalen.
4. Kör därefter `npm start` följande meddelande visas:

   > ```
   > CrowdTest@1.0.0 start [filsökväg]
   > parcel index.html --open
   > Server running at http://localhost:1234
   > Built in xx s.
   > ```

5. Nu kan du besöka sidan på ovan adress. Notera att startsidan (index.html) bör öppnas automatiskt i din förvalda webbläsare, du kommer vidare till app via länken i nav-baren eller lägg till: **/app.html** i webbläsarens adressfönster.

## Externa bibliotek

### [React](https://www.npmjs.com/package/react)

React är ett JavaScript-bibliotek för att skapa användargränssnitt.

### [React-dom](https://www.npmjs.com/package/react)

Detta paket fungerar som ingångspunkten till DOM- och serverrenderare för React. Den är avsedd att paras ihop med det generiska React-paketet.

### [Axios](https://www.npmjs.com/package/axios)

Axios är en promise-baserad HTTP-klient för webbläsaren och Node.js. Axios gör det enkelt att skicka asynkrona HTTP-förfrågningar till REST-slutpunkter och utföra CRUD-operationer. Det kan användas i vanlig JavaScript eller med ett bibliotek som Vue eller React.

installerad som paket (npm)

### [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

Använder Bootstrap för styling (knappar, tables och responsivitet m.m.)

Importerad i app.html (script src)

### [Parcel](https://www.npmjs.com/package/parcel)

Parcel är en webbapplikationspaketerare (bundler), som särskiljs av sin utvecklarupplevelse. Den erbjuder blixtsnabb prestanda med flerkärnig bearbetning och kräver noll konfiguration. Lätt att använda, enkelt att utöka och kraftfullt byggsystem.

Installerad som paket (npm)

## Tjänster

### [Mockapi](https://mockapi.io/)

https://6268f190f2c0cdabac06d6a5.mockapi.io/ImprovementProposals (Endpoints: GET + POST)\
Jag har skapat ett mockapi för att skicka och visa förbättringsförslag som inloggad användare eller företag.

proposalform.jsx - Formuläret som skickar data via POST. (src/app/components)\
proposalboard.jsx - Läser in samtliga förbättringsförslag via GET. (src/app/components)\
api.js - Har funktioner för ovan två (för att separera UI från API funktionerna). (src/app/api)

https://628a11e15da6ddfd5d5f66fa.mockapi.io/bids (Endpoints: GET + POST)\
Jag har skapat ett mockapi för att skicka bud (som testare) och visa bud (som testare och företag).\
bidform.jsx - Formuläret som skickar data via POST. (src/app/components)\
viewbids.jsx - Läser in alla bud via GET. (src/app/components)\
api.js - Har funktioner för ovan två (för att separera UI från API funktionerna). (src/app/api)
