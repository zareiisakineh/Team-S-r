// ==========================================================
// TEAM SØR - app.js
// ==========================================================

console.log("app.js loaded");

// ----------------------------------------------------------
// HENT ANSATTE FRA FIRESTORE
// ----------------------------------------------------------

import { hentAnsatte } from "./ansatteFirestore.js";


// ==========================================================
// TREKKSPILL
// ==========================================================

function toggleAccordion(button) {

    // Finn tilhørende item
    const item = button.parentElement;

    // Finn svarfeltet
    const answer = item.querySelector(".answer");

    if (!answer) {
        console.warn("Fant ikke .answer for trekkspill:", button);
        return;
    }

    // ------------------------------------------------------
    // Lukk alle andre svar
    // ------------------------------------------------------

    document.querySelectorAll(".answer").forEach(element => {

        if (element !== answer) {
            element.classList.remove("open");
        }

    });

    // ------------------------------------------------------
    // Fjern rotasjon fra alle andre piler
    // ------------------------------------------------------

    document.querySelectorAll(".icon").forEach(icon => {

        if (icon !== button.querySelector(".icon")) {
            icon.classList.remove("rotate");
        }

    });

    // ------------------------------------------------------
    // Åpne / lukk valgt trekkspill
    // ------------------------------------------------------

    answer.classList.toggle("open");

    // ------------------------------------------------------
    // Roter pil
    // ------------------------------------------------------

    const icon = button.querySelector(".icon");

    if (icon) {
        icon.classList.toggle("rotate");
    }

}


// ----------------------------------------------------------
// Aktiver alle trekkspillknapper
// ----------------------------------------------------------

document.querySelectorAll(".question").forEach(button => {

    button.addEventListener("click", () => {
        toggleAccordion(button);
    });

});


// ==========================================================
// FIRESTORE - HENT ANSATTE
// ==========================================================

const ansatte = await hentAnsatte();

console.log("Antall ansatte:", ansatte.length);


// ==========================================================
// DEL ANSATTE INN I GRUPPER
// ==========================================================

const sykepleier = ansatte.filter(person =>
    person.gruppe === "Sykepleiere"
);

const hjelpepleier = ansatte.filter(person =>
    person.gruppe === "Helsefagarbeidere"
);

const praktiskBistand = ansatte.filter(person =>
    person.gruppe === "PraktiskBistand"
);

const ekstravakt = ansatte.filter(person =>
    person.gruppe === "Ekstravakter"
);

const fysioterapeut = ansatte.filter(person =>
    person.gruppe === "fysioterapeuter"
);

const ergoterapeut = ansatte.filter(person =>
    person.gruppe === "ergoterapeuter"
);

const AKS = ansatte.filter(person =>
    person.gruppe === "AKS"
);

const ernæringsfysiolog = ansatte.filter(person =>
    person.gruppe === "ernæringsfysiologer"
);

const leder = ansatte.filter(person =>
    person.gruppe === "ledere"
);

const merkantil = ansatte.filter(person =>
    person.gruppe === "merkantiler"
);

const nattevakt = ansatte.filter(person =>
    person.gruppe === "nattevakter"
);

const vurderingsteam = ansatte.filter(person =>
    person.gruppe === "vurderingsteam"
);

const responssenter = ansatte.filter(person =>
    person.gruppe === "responssenter"
);

const fagsykepleier = ansatte.filter(person =>
    person.gruppe === "fagsykepleiere"
);


// ==========================================================
// VIS ANSATTE
// ==========================================================

function visGruppe(containerId, liste) {

    const container = document.getElementById(containerId);

    // Hvis containeren ikke finnes på denne siden,
    // gjør vi ingenting.
    if (!container) {
        return;
    }

    // Tøm containeren før vi legger inn ansatte
    container.innerHTML = "";

    // Legg inn hver person
    liste.forEach(person => {

        container.innerHTML += `

            <div class="ansattKort">

                <h3>${person.navn ?? ""}</h3>

                <p>${person.rolle ?? ""}</p>

                <div class="ikoner">

                    <a href="${person.bilde ?? "#"}"
                       class="glightbox"
                       title="${person.navn ?? ""}">
                        <i class="fas fa-image"></i>
                    </a>

                    <a href="tel:${person.telefon ?? ""}">
                        <i class="fas fa-phone"></i>
                    </a>

                    <a href="mailto:${person.epost ?? ""}">
                        <i class="fas fa-envelope"></i>
                    </a>

                </div>

            </div>

        `;

    });

}


// ==========================================================
// VIS GRUPPENE
// ==========================================================

if (document.getElementById("SPL")) {
    visGruppe("SPL", sykepleier);
}

if (document.getElementById("HPL")) {
    visGruppe("HPL", hjelpepleier);
}

if (document.getElementById("PB")) {
    visGruppe("PB", praktiskBistand);
}

if (document.getElementById("ekstravakt")) {
    visGruppe("ekstravakt", ekstravakt);
}

if (document.getElementById("fysio")) {
    visGruppe("fysio", fysioterapeut);
}

if (document.getElementById("ergo")) {
    visGruppe("ergo", ergoterapeut);
}

if (document.getElementById("AKS")) {
    visGruppe("AKS", AKS);
}

if (document.getElementById("ernæringFysio")) {
    visGruppe("ernæringFysio", ernæringsfysiolog);
}

if (document.getElementById("leder")) {
    visGruppe("leder", leder);
}

if (document.getElementById("merkantil")) {
    visGruppe("merkantil", merkantil);
}

if (document.getElementById("nattevakt")) {
    visGruppe("nattevakt", nattevakt);
}

if (document.getElementById("vurderingsteam")) {
    visGruppe("vurderingsteam", vurderingsteam);
}

if (document.getElementById("responssenter")) {
    visGruppe("responssenter", responssenter);
}

if (document.getElementById("fagSPL")) {
    visGruppe("fagSPL", fagsykepleier);
}


// ==========================================================
// MOBILMENY
// ==========================================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    // ------------------------------------------------------
    // Åpne / lukke hamburgermeny
    // ------------------------------------------------------

    menuToggle.addEventListener("click", event => {

        event.stopPropagation();

        menu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            menu.classList.contains("open")
        );

    });


    // ------------------------------------------------------
    // Lukk meny når en lenke klikkes
    // ------------------------------------------------------

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


    // ------------------------------------------------------
    // Lukk meny ved klikk utenfor
    // ------------------------------------------------------

    document.addEventListener("click", event => {

        if (!menu.classList.contains("open")) {
            return;
        }

        // Klikk på menyknappen?
        if (menuToggle.contains(event.target)) {
            return;
        }

        // Klikk inne i menyen?
        if (menu.contains(event.target)) {
            return;
        }

        // Ellers lukk menyen
        menu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

}


// ==========================================================
// ÅPNE RIKTIG TREKKSPILL VED HASH / SØK
// ==========================================================

window.addEventListener("load", () => {

    if (!location.hash) {
        return;
    }

    let element;

    try {

        element = document.querySelector(location.hash);

    } catch (error) {

        console.warn(
            "Ugyldig URL-hash:",
            location.hash
        );

        return;
    }

    if (!element) {
        return;
    }

    const button = element.querySelector(".question");

    if (!button) {
        return;
    }

    toggleAccordion(button);

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// ==========================================================
// SERVICE WORKER
// ==========================================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        console.log(
            "Prøver å registrere service worker..."
        );

        navigator.serviceWorker.register(
            "/Team-S-r/sw.js"
        )

        .then(registration => {

            console.log(
                "Service Worker registrert:",
                registration.scope
            );

        })

        .catch(error => {

            console.error(
                "Service Worker kunne ikke registreres:",
                error
            );

        });

    });

}


// ==========================================================
// INSTALLER APP
// ==========================================================

// Her lagres installasjonsdialogen
let deferredPrompt = null;


// Finn installer-knappen
const installButton =
    document.getElementById("installApp");


// ==========================================================
// BEFOREINSTALLPROMPT
// ==========================================================

window.addEventListener(
    "beforeinstallprompt",
    event => {

        console.log("INSTALL EVENT FUNNET");

        // Hindrer Chrome fra å vise sitt eget
        // installasjonsvindu automatisk
        event.preventDefault();

        // Lagre installasjonsdialogen
        deferredPrompt = event;

        console.log(
            "Installasjonsdialog lagret."
        );

        // Vis vår egen knapp
        if (installButton) {

            installButton.hidden = false;

            console.log(
                "Installer-knappen er synlig."
            );

        }

    }
);


// ==========================================================
// KLIKK PÅ INSTALLER
// ==========================================================

if (installButton) {

    installButton.addEventListener(
        "click",
        async () => {

            // Hvis installasjonsdialogen ikke finnes
            if (!deferredPrompt) {

                console.log(
                    "Ingen installasjonsdialog tilgjengelig."
                );

                return;
            }

            // Vis installasjonsdialogen
            deferredPrompt.prompt();

            // Vent på brukerens valg
            const result =
                await deferredPrompt.userChoice;

            console.log(
                "Installasjonsvalg:",
                result.outcome
            );


            // ------------------------------------------------
            // Brukeren installerte
            // ------------------------------------------------

            if (result.outcome === "accepted") {

                console.log(
                    "Brukeren installerte Team Sør som app."
                );

            }


            // ------------------------------------------------
            // Brukeren avbrøt
            // ------------------------------------------------

            else {

                console.log(
                    "Brukeren avbrøt installasjonen."
                );

            }


            // Dialogen kan bare brukes én gang
            deferredPrompt = null;


            // Skjul knappen
            installButton.hidden = true;

        }
    );

}


// ==========================================================
// APPEN ER INSTALLERT
// ==========================================================

window.addEventListener(
    "appinstalled",
    () => {

        console.log(
            "Team Sør er installert som app."
        );

        if (installButton) {

            installButton.hidden = true;

        }

        deferredPrompt = null;

    }
);


// ==========================================================
// SJEKK OM APPEN ALLEREDE KJØRER SOM INSTALLERT APP
// ==========================================================

const isStandalone =
    window.matchMedia(
        "(display-mode: standalone)"
    ).matches ||
    window.navigator.standalone === true;


if (isStandalone) {

    console.log(
        "Appen kjører som installert app."
    );

    if (installButton) {

        installButton.hidden = true;

    }

}