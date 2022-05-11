# CrowdTest

1. Klona ner repot från GitHub (https://github.com/niborium/CrowdTest)
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

### [Axios](https://www.npmjs.com/package/axios)

Axios är en promise-baserad HTTP-klient för webbläsaren och Node.js. Axios gör det enkelt att skicka asynkrona HTTP-förfrågningar till REST-slutpunkter och utföra CRUD-operationer. Det kan användas i vanlig JavaScript eller med ett bibliotek som Vue eller React.

installerad som paket (npm)

### [Bootstrap](https://parceljs.org/)

Parcel är en webbapplikationspaketerare (bundler), som särskiljs av sin utvecklarupplevelse. Den erbjuder blixtsnabb prestanda med flerkärnig bearbetning och kräver noll konfiguration. Lätt att använda, enkelt att utöka och kraftfullt byggsystem.

Importerad i app.html (script src)

### [Parcel](https://www.npmjs.com/package/parcel-bundler

Installerad som paket (npm)

## Tjänster

### [Mockapi](https://6268f190f2c0cdabac06d6a5.mockapi.io/ImprovementProposals)

https://6268f190f2c0cdabac06d6a5.mockapi.io/ImprovementProposals (Endpoints: GET + POST)\
Jag har skapat ett mockapi för att skicka och visa förbättringsförslag som inloggad användare eller företag.

proposalform.jsx - Formuläret som skickar data via POST. (src/app/components)\
proposalboard.jsx - Läser in samtliga förbättringsförslag via GET. (src/app/components)\
api.js - Har funktioner för ovan två (för att separera UI från API funktionerna). (src/app/api)
