console.log("app.js loaded");

// Felles funksjon for alle trekkspill
// ----------------------------------------------------------
// toggleAccordion()
// Denne funksjonen kjøres hver gang brukeren klikker på en
// knapp i trekkspillet.
//
// HTML:
// <button onclick="toggleAccordion(this)">
//
// "this" sender den knappen brukeren klikket på inn til
// funksjonen. Parameteren "button" blir derfor en referanse
// til akkurat denne knappen.
// ----------------------------------------------------------
function toggleAccordion(button) {
// ------------------------------------------------------
    // nextElementSibling
    //
    // DOM (Document Object Model) ser HTML som et tre av elementer.
    //
    // HTML-en vår ser slik ut: 
    // <button class="question">
    // </button>
    // <div class="answer">
    // </div>
    // answer-diven ligger rett etter button. nextElementSibling betyr: "Finn neste HTML-element etter denne knappen.
    // Resultatet lagres i variabelen answer.
    // ------------------------------------------------------
    const answer = button.nextElementSibling;
 // ------------------------------------------------------
    // querySelector() 
    // querySelector søker etter elementer ved hjelp av CSS-selectorer.
    // ".icon" betyr: class="icon"
    //
    // Det viktige her er at søket skjer INNE I KNAPPEN.
    //
    // JavaScript leter derfor bare etter pilen som tilhører
    // knappen brukeren klikket på.
    // ------------------------------------------------------
    const icon = button.querySelector(".icon");
 // ------------------------------------------------------
    // querySelectorAll()
    // document betyr hele nettsiden. querySelectorAll(".answer")finner ALLE elementer som har klassen answer.
    // Resultatet blir en NodeList (en liste over elementer).
    // Eksempel:
    // answer1
    // answer2
    // answer3
    // answer4
    // ------------------------------------------------------
    document.querySelectorAll(".answer").forEach(element => {
         // forEach går gjennom listen ett element om gangen.
        // Første runde:
        // item = answer1
        // Andre runde:
        // item = answer2
        // osv.
        // --------------------------------------------------
        // !== betyr:"ikke identisk med"
        // Vi ønsker ikke å lukke svaret brukeren nettopp klikket på. Derfor spør vi:
        // Er dette et annet svar?
        // Hvis ja: fjern active.
        if (element !== answer) {
            element.classList.remove("active");
        }
    });
// ------------------------------------------------------
    // Nå gjør vi nøyaktig det samme med pilene.
    // Vi finner alle ikonene på siden.
    document.querySelectorAll(".icon").forEach(element => {
         // Hvis ikonet ikke tilhører knappen som ble klikket,
        // fjernes klassen open slik at pilen peker ned igjen.
        if (element !== icon) {
            element.classList.remove("open");
        }
    });
    // classList.toggle()
    // toggle betyr "veksle".
    // Hvis klassen active IKKE finnes: legger JavaScript den til.
    // Hvis klassen allerede finnes:fjerner JavaScript den.
    //
    // CSS bestemmer hva active betyr:
    // .answer{
    //     display:none;
    // }
    // .answer.active{
    //     display:block;
    // }
    // JavaScript endrer altså bare klassene.
    // CSS bestemmer hvordan siden skal se ut.
    // ------------------------------------------------------
    answer.classList.toggle("active");
 // ------------------------------------------------------
    // if(icon): Sjekker om variabelen icon faktisk inneholder et HTML-element.
    // Dersom knappen av en eller annen grunn ikke har et ikon, hopper JavaScript bare over denne delen.
    // Da unngår vi feilmeldinger.
    // ------------------------------------------------------
    if (icon) {
        // Roter pilen ved å legge til eller fjerne klassen open.
        icon.classList.toggle("open");
    }
}
// ----------------------------------------------------------
// DOMContentLoaded:
// Nettleseren leser HTML ovenfra og ned.
//
// Hvis JavaScript prøver å hente et element før HTML-en er ferdig lastet, vil elementet ikke finnes.
// Derfor venter vi til hele DOM-en er ferdig bygd.
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
 // ------------------------------------------------------
    // getElementById(): Henter ett bestemt HTML-element ved hjelp av id.
    // HTML:
    // <button id="menuToggle">
    // Resultatet lagres i variabelen menuToggle.
    // ------------------------------------------------------
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
// ------------------------------------------------------
    // Denne if-setningen spør: Finnes både knappen og menyen?
    // Hvis ett av elementene mangler, kjører ikke resten av koden.
    // ------------------------------------------------------
    if (menuToggle && menu) {
  // --------------------------------------------------
        // addEventListener() Lager en "lytter".
        // JavaScript sitter nå og venter på at brukeren klikker på menyknappen.
        // Når klikket skjer, kjøres funksjonen under.
        // --------------------------------------------------
        menuToggle.addEventListener("click", (event) => {
            // ----------------------------------------------
    //Hindrer at klikket bobler videre til document   
            event.stopPropagation();
         
    // toggle("open") 
            // Hvis open finnes: fjern den.
            // Hvis open ikke finnes: legg den til.
            // CSS avgjør om menyen skal være synlig.
            // ----------------------------------------------
            menu.classList.toggle("open");
   // ----------------------------------------------
            // setAttribute(): Endrer et attributt i HTML.
            // aria-expanded brukes av skjermlesere.
            // classList.contains("open"): returnerer true eller false.
            
            // Hvis menyen er åpen:
            // aria-expanded="true"
            //
            // Hvis den er lukket:
            // aria-expanded="false"
            //
            // Dette gjør nettsiden mer universelt utformet.
            // ----------------------------------------------
            menuToggle.setAttribute(
                "aria-expanded",
                menu.classList.contains("open")
            );
        });

 // ==============================================
        // Lukk meny når en lenke klikkes
        // ==============================================
        const menuLinks = document.querySelectorAll("#menu a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    // ==============================================
        // Lukk meny ved klikk utenfor
        // ==============================================
        document.addEventListener("click", (event) => {

            if (
                menu.classList.contains("open") &&
                !event.target.closest(".nav")
            ) {

                menu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

        document.addEventListener("click", (event) => {

    if (!menu.classList.contains("open")) return;

    // Klikk på menyknappen?
    if (menuToggle.contains(event.target)) return;

    // Klikk inne i selve menylisten?
    if (menu.contains(event.target)) return;

    // Ellers: lukk menyen
    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

});

    }

});

//for søkeboksen
window.addEventListener("load", () => {

    if (!location.hash) return;

    const element = document.querySelector(location.hash);

    if (!element) return;

    const button = element.querySelector(".question");

    if (button) {
        toggleAccordion(button);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

});

  //for å få varsel om bursdager:
  //
    //1.lager en liste(arrays) av objekter(ansatte) med attributer dag og måned:
 const bursdager = [
 {navn: "AnnaEliasson", dag: 14, måned: 1},
{navn: "Sakti", dag: 28, måned: 1},
 {navn: "Xaviera", dag: 2, måned: 2},
 {navn: "JoAn", dag: 6, måned: 2},
 {navn: "Miguel", dag: 11, måned: 2},
 {navn: "Ane", dag: 18, måned: 2},
  {navn: "Fadumo", dag: 1, måned: 3},
 {navn: "Noh", dag: 8, måned: 3},
 {navn: "Zemene", dag: 29, måned: 3},
 {navn: "Kristine", dag: 30, måned: 3},
 {navn: "MartheS", dag: 2, måned: 4},
 {navn: "Cecilie", dag: 5, måned: 4},
 {navn: "Sakineh", dag: 7, måned: 7},
 {navn: "Sumaya", dag: 6, måned: 5},
 {navn: "Ravi", dag: 12, måned: 5},
 {navn: "Marte", dag: 20, måned: 5},
 {navn: "Malyuun", dag: 6, måned: 6},
 {navn: "Chandranitti", dag: 7, måned: 6},
 {navn: "Sussie", dag: 9, måned: 6},
 {navn: "Glen", dag: 15, måned: 6},
 {navn: "Linda", dag: 17, måned: 6},
 {navn: "JohnJames", dag: 20, måned: 6},
 {navn: "Carolina", dag: 22, måned: 6},
 {navn: "Silje", dag: 24, måned: 6},
 {navn: "Tigist", dag: 16, måned: 7},
 {navn: "Tigist", dag: 2, måned: 7},
 {navn: "Gale", dag: 19, måned: 7},
 {navn: "Ana Marie", dag: 25, måned: 8},
 {navn: "Ibrahim", dag: 28, måned: 8},
 {navn: "Sara", dag: 5, måned: 9},
 {navn: "Carlette", dag: 13, måned: 9},
 {navn: "Robiel", dag: 19, måned: 9},
 {navn: "Amalie", dag: 18, måned: 9},
 {navn: "Yusuf", dag: 2, måned: 10},
 {navn: "Aase", dag: 2, måned: 10},
 {navn: "Hamid", dag: 27, måned: 11},
 {navn: "Nabina", dag: 7, måned: 12},
 {navn: "Cathy", dag: 23, måned: 12},
 {navn: "Mathias", dag: 23, måned: 12},
 
];

const melding = document.getElementById("bursdagMelding");
//new Date() lager et datoobjekt.Hvis datoen er 21. juli 2026, inneholder iDag: Tue Jul 21 2026
const iDag = new Date();
//Henter dagen. getDate() betyr Hvilken dag i måneden er det? Eksempel 21. juli gir dag = 21; i dag er object, med attributer dag og måned
const dag = iDag.getDate();
//Henter måneden. Månedene i js begynner med 0. Derfor adderer vi med 1
const måned = iDag.getMonth() + 1;
const knapp = document.getElementById("sendWhatsapp") ;
// Finn alle som har bursdag i dag. filter() går gjennom hele object-listen og lager en ny liste av de som har bursdag i dagens dato
const dagensBursdager = bursdager.filter(person =>
    person.dag === dag && person.måned === måned
);
// Har vi funnet noen?--> vis melding
if (dagensBursdager.length > 0) {
    knapp.style.display = "inline-block";
    melding.style.display = "block"; //melding vises

    const navn = dagensBursdager.map(person => person.navn); //map lager en ny liste av dagens bursdagsbarn
  // hvis listen inneholder bare et navn
    if (navn.length === 1) {

        melding.innerHTML = `
            🎉 Gratulerer med dagen kjære <strong>${navn[0]}</strong>! 🎂
            Alle oss i Team Sør ønsker deg en riktig flott dag fylt med glede, smil og kake! 🥳🎈!
        `;
    // hvis listen inneholder flere enn et navn
    } else {

        melding.innerHTML = `
            🎉 Gratulerer med dagen kjære
            <strong>${navn.join(", ")}</strong>! 🎂
            Alle oss i Team Sør ønsker dere en riktig flott dag fylt med glede, smil og kake! 🥳🎈!`;
    }
}

/*Oppsummering av programmet

Programmet følger denne rekkefølgen:

📋 Lager en liste med ansatte og bursdager.
📅 Leser dagens dato fra datamaskinen.
🔍 Går gjennom listen med filter().
✅ Finner alle som har bursdag i dag.
📏 Sjekker om listen er tom med length.
🎉 Hvis noen har bursdag, vises meldingsboksen.
📝 map() henter ut bare navnene.
✍️ join() setter navnene sammen til én tekst hvis flere har bursdag.
🌐 innerHTML skriver gratulasjonsmeldingen inn på nettsiden. */


//deler bursdagsmelding på whatsapp 
knapp.addEventListener("click", () => {

            const melding =
                "🎉 Gratulerer med dagen!<strong>${navn[0]}</strong>! 🎂 Alle oss i Team Sør ønsker deg en fantastisk dag! 🎂🎈";

            window.open(
                `https://wa.me/?text=${encodeURIComponent(melding)}`,
                "_blank"
            );

        });

// Installer-knappen
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker registrert"))
            .catch(error => console.log(error));

    });

}
//Knappen vises bare når installasjon er mulig.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {

    event.preventDefault();

    deferredPrompt = event;

    document.getElementById("installApp").hidden = false;

});

document.getElementById("installApp").addEventListener("click", async () => {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

    document.getElementById("installApp").hidden = true;

});

//Registrer service worker
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register(
        "service-worker.js"
    )
    .then(() => {
        console.log("Service Worker aktiv");
    })
    .catch(error => {
        console.log("Feil:", error);
    });
}
//------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//-------------------------------Lager objekter for alle sykepleiere---------------------------------------
/*const sykepleier = [
    {navn:"Sara", rolle:"", telefon:"", epost:"", bilde:"bilder/Sara.jpg"},
    {navn:"Cathy", rolle:"", telefon:"", epost:"", bilde:"bilder/Cathy.jpg"},
    {navn:"Mathias", rolle:"", telefon:"", epost:"", bilde:"bilder/Mathias.jpg"},
    {navn:"Carolina", rolle:"", telefon:"", epost:"", bilde:"bilder/Carolina.jpg"},
    {navn:"Marte", rolle:"", telefon:"", epost:"", bilde:"bilder/Marte.jpg"},
    {navn:"Cecilie", rolle:"", telefon:"", epost:"", bilde:"bilder/Cecilie.jpg"},
    {navn:"Kristine", rolle:"", telefon:"", epost:"", bilde:"bilder/Kristine.jpg"},
    {navn:"Fadumo", rolle:"", telefon:"", epost:"", bilde:"bilder/Fadumo.jpg"},
    {navn:"Xaviera", rolle:"", telefon:"", epost:"", bilde:"bilder/Xaviera.jpg"},
    {navn:"Sakineh", rolle:"", telefon:"", epost:"", bilde:"bilder/Sakineh.jpg"},
    {navn:"Neda", rolle:"", telefon:"", epost:"", bilde:"bilder/Neda.jpg"},
    {navn:"Sumaya", rolle:"", telefon:"", epost:"", bilde:"bilder/Sumaya.jpg"},
    ];
*/
    /* ---------------------------------javascript lager kontaktkort-------------------------------------
// ----------------------------------------------Sykepleiere---------------------------------------------
const container1 = document.getElementById("SPL");
sykepleier.forEach(person => {
    container1.innerHTML += `
    <div class="ansattKort">
        <h3>${person.navn}</h3>
        <p>${person.rolle}</p>
        <div class="ikoner">
         <a href="${person.bilde}" class="glightbox" title="${person.navn}">
                <i class="fas fa-image"></i>
            </a>
            <a href="tel:${person.telefon}">
                <i class="fas fa-phone"></i>
            </a>   
        </div>
    </div>
    `
    ;
});
*/
//------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//--------------------------Lager objekter for alle Helsefagarbeidere---------------------------------------
/*const helsefag = [
     {navn:"Hamid", rolle:"", telefon:"", epost:"", bilde:"bilder/Hamid.jpg"},
     {navn:"Noh", rolle:"", telefon:"", epost:"", bilde:"bilder/Noh.jpg"},
     {navn:"Sakti", rolle:"", telefon:"", epost:"", bilde:"bilder/Sakti.jpg"},
     {navn:"Linda", rolle:"", telefon:"", epost:"", bilde:"bilder/Linda.jpg"},
     {navn:"Chandranitti", rolle:"", telefon:"", epost:"", bilde:"bilder/Chandranitti.jpg"},
     {navn:"AnaMarie", rolle:"", telefon:"", epost:"", bilde:"bilder/AnaMarie.jpg"},
     {navn:"Tigist", rolle:"", telefon:"", epost:"", bilde:"bilder/Tigist.jpg"},
     {navn:"JoAn", rolle:"", telefon:"", epost:"", bilde:"bilder/JoAn.jpg"},
     {navn:"Robiel", rolle:"", telefon:"", epost:"", bilde:"bilder/Robiel.jpg"},
     {navn:"Ibrahim", rolle:"", telefon:"", epost:"", bilde:"bilder/Ibrahim.jpg"},
     {navn:"Nabina", rolle:"", telefon:"", epost:"", bilde:"bilder/Nabina.jpg"},
     {navn:"Preenaphan", rolle:"", telefon:"", epost:"", bilde:"bilder/Preenaphan.jpg"},
     {navn:"Gliceria", rolle:"", telefon:"", epost:"", bilde:"bilder/Gliceria.jpg"},
     {navn:"Miguel", rolle:"", telefon:"", epost:"", bilde:"bilder/Miguel.jpg"},
     {navn:"Dessery", rolle:"", telefon:"", epost:"", bilde:"bilder/Dessery.jpg"},
     ];*/
/*------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//--------------------------Lager objekter for alle Helsefagarbeidere---------------------------------------
     const container2 = document.getElementById("HPL");
     helsefag.forEach(person => {
    container2.innerHTML += `
    <div class="ansattKort">
        <h3>${person.navn}</h3>
        <p>${person.rolle}</p>
        <div class="ikoner">
         <a href="${person.bilde}" class="glightbox" title="${person.navn}">
                <i class="fas fa-image"></i>
            </a>
            <a href="tel:${person.telefon}">
                <i class="fas fa-phone"></i>
            </a>   
        </div>
    </div>
    `
    ;
});
*/
//------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//--------------------------Lager objekter for alle i paraktisk bistand---------------------------------------
/*const paktiskBistand = [
    {navn:"Ravi", rolle:"", telefon:"", epost:"", bilde:"bilder/Ravi.jpg"},
    {navn:"Sussie", rolle:"", telefon:"", epost:"", bilde:"bilder/Sussie.jpg"},
    {navn:"Ebyan", rolle:"", telefon:"", epost:"", bilde:"bilder/Ebyan.jpg"},
];*/
/* -------------------------------javascript lager kontaktkort-------------------------------------
// --------------------------------------paraktisk bistand---------------------------------------------
const container3 = document.getElementById("PB");
paktiskBistand.forEach(person => {
    container3.innerHTML += `
    <div class="ansattKort">
        <h3>${person.navn}</h3>
        <p>${person.rolle}</p>
        <div class="ikoner">
         <a href="${person.bilde}" class="glightbox" title="${person.navn}">
                <i class="fas fa-image"></i>
            </a>
            <a href="tel:${person.telefon}">
                <i class="fas fa-phone"></i>
            </a>   
        </div>
    </div>
    `
    ;
});
*/
//------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//--------------------------Lager objekter for alle Ekstravakter---------------------------------------
/*const ekstravakter= [

{ navn:"Abdisaalam Saeed", rolle:"", telefon:"92258951", epost:"", bilde:"bilder/Abdisaalam.jpg" },

{ navn:"Ibrahim Ahmednoor(SPL)", rolle:"", telefon:"99105994", epost:"", bilde:"bilder/Ibahim.jpg" },

{ navn:"Albana", rolle:"", telefon:"90011223", epost:"", bilde:"bilder/Albana.jpg" },

{ navn:"Amalie(SPL)", rolle:"", telefon:"91742740", epost:"", bilde:"bilder/Amalie.jpg" },

{ navn:"Carlette", rolle:"", telefon:"96689375", epost:"", bilde:"bilder/Carlette.jpg" },

{ navn:"Danait Chilmichael", rolle:"", telefon:"45113773", epost:"", bilde:"bilder/Danait.jpg" },


{ navn:"Dessery(30%)", rolle:"", telefon:"99860102", epost:"", bilde:"bilder/Dessery.jpg" },

{ navn:"Fekerte(SPL)", rolle:"", telefon:"97097023", epost:"", bilde:"bilder/Fekerte.jpg" },

{ navn:"Gale-Ane", rolle:"", telefon:"93956855", epost:"", bilde:"bilder/Gale-ane.jpg" },

{ navn:"Gliceria(20%)", rolle:"", telefon:"92541182", epost:"", bilde:"bilder/Gliceria.jpg" },

{ navn:"Glen(SPL)", rolle:"", telefon:"96669748", epost:"", bilde:"bilder/Glen.jpg" },

{ navn:"Guen(SPL)", rolle:"", telefon:"45147657", epost:"", bilde:"bilder/Guen.jpg" },

{ navn:"Helene", rolle:"", telefon:"41339278", epost:"", bilde:"bilder/Helene.jpg" },

{ navn:"John James", rolle:"", telefon:"45586388", epost:"", bilde:"bilder/JohnJames.jpg" },

{ navn:"Judelyn", rolle:"", telefon:"96656132", epost:"", bilde:"bilder/Judelyn.jpg" },

{ navn:"Julius", rolle:"", telefon:"96907174", epost:"", bilde:"Julius/.jpg" },

{ navn:"Khirad", rolle:"", telefon:"99350304", epost:"", bilde:"bilder/Khirad.jpg" },

{ navn:"Khadra(VPL)", rolle:"", telefon:"92953974", epost:"", bilde:"bilder/Khadra.jpg" },

{ navn:"Khadija", rolle:"", telefon:"40077048", epost:"", bilde:"bilder/Khadija.jpg" },

{ navn:"Malele(SPL)", rolle:"", telefon:"93809596", epost:"", bilde:"bilder/Malele.jpg" },

{ navn:"Malyuun(SPL)", rolle:"", telefon:"40954865", epost:"", bilde:"bilder/Malyuun.jpg" },

{ navn:"MartheS(SPL)", rolle:"", telefon:"95990136", epost:"", bilde:"bilder/MartheS.jpg" },

{ navn:"Marco Tørnvall", rolle:"", telefon:"40605990", epost:"", bilde:"bilder/SiljeAntonsen.jpg" },

{ navn:"Mostopha", rolle:"", telefon:"98774382", epost:"", bilde:"bilder/Mostopha.jpg" },

{ navn:"Neda(SPL 20%)", rolle:" ", telefon:"90653331", epost:"", bilde:"bilder/Neda.jpg" },

{ navn:"Nica", rolle:"", telefon:"93971207", epost:"", bilde:"bilder/Nica.jpg" },

{ navn:"Nabina(30%)", rolle:"", telefon:"46397430", epost:"", bilde:"bilder/Nabina.jpg" },

{ navn:"Preenaphan", rolle:"", telefon:"93476165", epost:"", bilde:"bilder/Preenaphan.jpg" },

{ navn:"Robiel(80%)", rolle:"", telefon:"97367760", epost:"", bilde:"bilder/Robiel.jpg" },

{ navn:"Silje Antonsen", rolle:"", telefon:"45179522", epost:"", bilde:"bilder/SiljeAntonsen.jpg" },

{ navn:"Senait", rolle:"", telefon:"40451826", epost:"", bilde:"bilder/Senait.jpg" },

{ navn:"Svetlana", rolle:"", telefon:"40571544", epost:"", bilde:"bilder/Svetlana.jpg" },

{ navn:"Sevinch", rolle:"", telefon:"96685552", epost:"", bilde:"bilder/Sevinch.jpg" },

{ navn:"Theresa(PB)", rolle:"", telefon:"41307331", epost:"", bilde:"bilder/Theresa.jpg" },

{ navn:"Tomina", rolle:"", telefon:"48173455", epost:"", bilde:"bilder/Tomina.jpg" },

{ navn:"Tuku", rolle:"", telefon:"94481168", epost:"", bilde:"bilder/Tuku.jpg" },

{ navn:"Valentina", rolle:"", telefon:"91147851", epost:"", bilde:"bilder/Valentina.jpg" },

{ navn:"Vilde", rolle:"", telefon:"93869136", epost:"", bilde:"bilder/Vilde.jpg" },

{ navn:"Yusuf", rolle:"", telefon:"45524866", epost:"", bilde:"bilder/Yusuf.jpg" },

{ navn:"Zemene(SPL)", rolle:"", telefon:"45248560", epost:"", bilde:"bilder/Zemene.jpg" },

{ navn:"Zohra Dellaa", rolle:"", telefon:"45911765", epost:"", bilde:"bilder/ZohraDellaa.jpg" },

{ navn:"Aase", rolle:"", telefon:"45228091", epost:"", bilde:"bilder/Aase.jpg" },

{ navn:"Kristine(SPL)", rolle:"", telefon:"48626825", epost:"", bilde:"bilder/Kristine.jpg" }

];
*/
/* --------------------javascript lager kontaktkort-------------------------------------
// ------------------------Ekstravakter---------------------------------------------
const container = document.getElementById("ekstravakt");
ekstravakter.forEach(person => {
    container.innerHTML += `
    <div class="ansattKort">
        <h3>${person.navn}</h3>
        <p>${person.rolle}</p>
        <div class="ikoner">
         <a href="${person.bilde}" class="glightbox" title="${person.navn}">
                <i class="fas fa-image"></i>
            </a>
            <a href="tel:${person.telefon}">
                <i class="fas fa-phone"></i>
            </a>   
        </div>
    </div>
    `
    ;
});
*/

// Lager fire lister ut fra gruppene
const sykepleier = ansatte.filter(person => {
    return person.gruppe === "Sykepleiere";
});

const hjelpepleier = ansatte.filter(person => {
    return person.gruppe === "Helsefagarbeidere";
});

const praktiskBistand = ansatte.filter(person => {
    return person.gruppe === "PraktiskBistand";
});

const ekstravakt = ansatte.filter(person => {
    return person.gruppe === "Ekstravakter";
});

// Funksjon som skriver ut én gruppe
function visGruppe(containerId, liste) {

    const container = document.getElementById(containerId);

    liste.forEach(person => {

        container.innerHTML += `
        
        <div class="ansattKort">

            <h3>${person.navn}</h3>

            <p>${person.rolle}</p>

            <div class="ikoner">

                <a href="${person.bilde}"
                   class="glightbox"
                   title="${person.navn}">
                    <i class="fas fa-image"></i>
                </a>

                <a href="tel:${person.telefon}">
                    <i class="fas fa-phone"></i>
                </a>

                <a href="mailto:${person.epost}">
                    <i class="fas fa-envelope"></i>
                </a>

            </div>

        </div>

        `;

    });

}

visGruppe("SPL", sykepleier);

visGruppe("HPL", hjelpepleier);

visGruppe("PB", praktiskBistand);

visGruppe("ekstravakt", ekstravakt);