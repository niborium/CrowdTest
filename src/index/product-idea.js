import { pagetitle, main } from "./index.js";
import { Businessplan } from "./business-plan.js";

export function renderProductidea() {
const businessplan = new Businessplan();

pagetitle.innerHTML = `<h2>Produktidé<h2>`;

main.innerHTML = `
    <div class="flex.container">
        <div id="div">
            <div>
                <p>
                    Den produktidé jag vill bygga under denna kurs är "lighweight"-prototyp av den fullständiga applikationen som beskrivs i <a href="${businessplan.businessplanlink}" type="application/pdf" runat="server" button type="button" class="btn btn-primary">Affärsplanen</a>.<br>
                    Fokus ligger på frontend-delen av applikationen för att få en bra presentation av hur applikationen kommer att tänkas fungera.<br>
                    Detta är en del av förberedande (2.3 & 2.31 i Affärsplanen) och är en förutsättning för 4.3 (att utveckla den fullständiga webbapplikationen). <br>
                </p>
                <div class="m-4">
    <div class="table-responsive"> 
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Arbetspaket prototyp:</th>
                    <th>Beskrivning:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><b>Responsiv webbdesign (RWD)</b></td>
                    <td>Sidan måste se bra ut både för mobila enheter och datorer. Använder Bootstrap & Media Queries.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><b>[Företag/Testare] Profilsida</b></td>
                    <td>Man ska kunna redigera sin profil uppe till. Här kan man se en överblick på sina uppgifter.<br>
                    Som testare kan man välja alla enhetsmodeller man har tillgänglig för testning.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><b>[Publik] Pågående annonser</b></td>
                    <td>Listar samtliga annonser som är aktiva (Anbud) och visar på sidan.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><b>[Företag] Lägg till annons</b></td>
                    <td>Företag kan lägga till nya annonser med: Budget för projektet, antal testare, kraven för testet (beskrivning), hur mycket man får betalt för arbetet, slut datum och tidpunkt för testet (testperiod).</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><b>[Företag] Redigera annons</b></td>
                    <td>Företag kan redigera befintlig annons (exempelvis redigera beskrivningen eller vilka modeller man vill testa på).</td>    
                </tr>
                <tr>
                    <td>6</td>
                    <td><b>[Företag] Radera annons</b></td>
                    <td>Företag kan radera en annons (förutsatt att man inte valt någon testare ännu eller testperiod startat).</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><b>[Företag] Välja testare för uppdrag</b></td>
                    <td>Se vilka som lämnat anbud på uppdragt och välj testare från listan.</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><b>[Testare] Lämna anbud</b></td>
                    <td>En knapp för att lämna anbud, då får man en dialog för att lämna meddelande och ange sitt timpris + antal timmar.</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><b>[Backend] Datalagring</b></td>
                    <td>Lagra data i JSON, localStorage eller med hjälp av MockAPI för att efterlikna ett riktigt backend.</td>
                </tr>
            </tbody>
        </table>
        </div>
        <p class="mt-4"><strong><u>Observera (Avgränsningar från projektmål):</u></strong><br>
            1) Prototypen kommer inte att inkludera betallösning (Deposition eller betalgateway) eller autentisering.<br>
            2) Prototypen kommer inte att inkludera riktigt backend (se 9 ovan).<br>
            3) Prototypen kommer inte att inkludera hanteringssystem för dispyter.<br>
            4) Prototypen kommer inte att inkludera betygssättningssystem (betygsätta testare).<br>
            5) Prototypen kommer inte ha någon fungerande adminpanel.
        </p>
        </div>
        </div>
        </div>
    </div>`;
}
