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


