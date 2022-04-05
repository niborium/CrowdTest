import { pagetitle, main } from "./index.js";

export class Businessplan{
    constructor(){
        this.businessname = "CrowdTest";
        this.businessplanlink = "src/index/docs/CrowdTest-Businessplan.pdf";
    }
    changeTitle(){
        pagetitle.innerHTML = `<h2>Affärsplan</h2>`;
    }
    render(){
        main.innerHTML = `
        <div class="flex.container">
        <div id="div">
            <p>
            ${this.businessname} är en Crowdsourcing-plattform för att söka testare till sin webbapplikation eller mobilapplikation. När du skapar en ny applikation så vill du få några initiala användare som testar din produkt och utvärderar den innan lansering.
            <br>
            Det kan vara svårt att hitta testare bortsett från nära anhöriga (familj & vänner) eller kollegor som kan testa din applikation.<br><br> 
            Man behöver få en bredare grupp av testare som kan testa  på olika enheter och ge ärlig feedback av produkten. Du kan via plattformen välja krav, åldersgrupp, intressen, välja från olika yrkesroller och enhets specifikt för att få en bra test grupp.
            <br><br>
            <div class="m-4">
            <div class="table-responsive"> 
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>När du publicerar och söker testare så kan du (som företag):</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bestämma din budget</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Hur många testare du behöver</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Kraven på på testet</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hur mycket man får betalt för utfört arbete</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Slut datum och tidpunkt för testet (Testperiod)</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            </div>
            <div class="m-4">
            <div class="table-responsive"> 
                <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Testare kan ge feedback på exempelvis:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Buggar/errors</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Användbarhet</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Användargränssnitt</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Generella förbättringsförslag</td>
                </tr>
                </tbody>
                </table>
                </div> 
            </div>
            <div class="m-4">
            <div class="table-responsive"> 
            <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Återrapportering till beställare</b></td>
                    <td>När testperioden är slut så återfår du en rapport från dina testare och du kan då betygsätta dem (bra testare kan få mer pengar genom att skriva bra rapporter).</td>
                </tr>
                <tr>
                    <td><b>Säkerhet för köpare och testare</b></td>
                    <td>Efter du valt vilka testare du vill anlita (’testare som ansökt om att bli testare’) så betalar du och då hålls pengarna i deposition (escrow) hos oss tills testperioden är över, detta är dels för att skydda dig som köpare av tjänsten men även för att skydda testarna så att bägge parter fullföljer uppdraget.<br><br>
                    När uppdraget är slutfört och du är nöjd så distribueras utbetalningarna till testarna.<br>
                    Är ni inte nöjd med resultatet av en specifik testare så kan du markera den som ’dispyt’ och ha direktkontakt med testaren för att lösa problemet.<br>
                    Kan varken ni som företag eller testare komma överens så kan ni markera den för utredning så hoppar vår kundtjänst (${this.businessname}) in och hjälper er i det enskilda fallet.</td>
                </tr>
                <tr>
                    <td><b>Hur tjänar ${this.businessname} pengar?</b></td>
                    <td>Vi tar en serviceavgift för varje order och tar 10% av den totala ordern.<br>
                    Exempel: du har ett enklare test som du erbjuder 1000 kronor för 2 testare så tar vi 100kr (10% av detta i avgift) som vi tillägger. Vilket resulterar i kostnad 1000+100 (i detta fall) = 1100 kr.<br><br>
                    Vi kommer även erbjuda att man kan hyra en testare per timme (timpris) där man själv som testare sätter timpriset, även från dessa så tar vi 10% service avgift.</td>
                </tr>
            </tbody>
            </table>
            </div> 
            </div>
            <hr>
            <img src="src/index/imgs/Anbud.png" class="responsive"><br><br>
            <img src="src/index/imgs/Per-timme.png" class="responsive">
            <p>En annan typ vi erbjuder är att anlita specifik testare per timme.<br>
            Detta flöde skiljer sig inget mer än att det är en enskild testare som accepterar uppdraget (man får bestämma timspriset och antal timmar).<br>
            Denna annonsen listas inte publikt utan är ett direktkontrakt mellan företaget och testaren.</p>
            <img src="src/index/imgs/Avgifter.png" class="responsive">
            </p>
            <hr>
        </div>
        </div>
        <a href="${this.businessplanlink}" type="application/pdf" runat="server" button type="button" class="btn btn-primary">Läs hela affärsplanen</a>
    </div>`
    }
}