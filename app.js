import { hentAnsatte } from "./ansatteFirestore.js";


console.log("app.js loaded");

function toggleAccordion(button) {

    const item = button.parentElement;

    const answer = item.querySelector(".answer");

    // Lukk alle andre trekkspill
    document.querySelectorAll(".answer").forEach(element => {

        if (element !== answer) {
            element.classList.remove("open");
        }

    });

    // Tilbakestill alle andre piler
    document.querySelectorAll(".icon").forEach(icon => {

        if (icon !== button.querySelector(".icon")) {
            icon.classList.remove("rotate");
        }

    });

    // Åpne/lukk valgt trekkspill
    answer.classList.toggle("open");

    // Roter pilen
    button.querySelector(".icon")
        ?.classList.toggle("rotate");
}
// ----------------------------------------------------------
document.querySelectorAll(".question")
.forEach(button => {

    button.addEventListener("click", () => {
        toggleAccordion(button);
    });

});

/* HENT ANSATTE FRA FIRESTORE */
const ansatte = await hentAnsatte();
const khirad = ansatte.find(
    person => person.navn === "Khirad"
);

// Kontakt-kort
// Lager fire lister ut fra gruppene:
//henter alle sykepleiere fra firestore
const sykepleier = ansatte.filter(person => {
    return  person.gruppe === "Sykepleiere";
});
//henter alle Helsefagarbeidere fra firestore
const hjelpepleier = ansatte.filter(person => {
    return  person.gruppe === "Helsefagarbeidere";
});
//henter alle i praktisk bistand fra firestore
const praktiskBistand = ansatte.filter(person => {
    return  person.gruppe === "PraktiskBistand";
});
//henter alle ekstravakter fra firestore
const ekstravakt = ansatte.filter(person => {
    return  person.gruppe === "Ekstravakter";
});
//henter alle fysioterapeuter fra firestore
const fysioterapeut = ansatte.filter(person => {
    return  person.gruppe === "fysioterapeuter";
});
//henter alle fysioterapeuter fra firestore
const ergoterapeut = ansatte.filter(person => {
    return  person.gruppe === "ergoterapeuter";
});
//henter alle fysioterapeuter fra firestore
const AKS = ansatte.filter(person => {
    return  person.gruppe === "AKS";
});
//henter alle ernæringsfysiologer fra firestore
const ernæringsfysiolog = ansatte.filter(person => {
    return  person.gruppe === "ernæringsfysiologer";
});
//henter alle ledere fra firestore
const leder = ansatte.filter(person => {
    return  person.gruppe === "ledere";
});
//henter alle merkantiler fra firestore
const merkantil = ansatte.filter(person => {
    return  person.gruppe === "merkantiler";
});
//henter alle nattevakter fra firestore
const nattevakt = ansatte.filter(person => {
    return  person.gruppe === "nattevakter";
});
//henter alle vurderingsteam fra firestore
const vurderingsteam = ansatte.filter(person => {
    return  person.gruppe === "vurderingsteam";
});
//henter alle responssenter fra firestore
const responssenter = ansatte.filter(person => {
    return  person.gruppe === "responssenter";
});
//henter alle fagsykepleiere fra firestore
const fagsykepleier = ansatte.filter(person => {
    return  person.gruppe === "fagsykepleiere";
});

 // ----------------------------
    // Vis ansatte
    // ----------------------------
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

  // ----------------------------
    // Koble til HTML
    // ----------------------------
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

// ----------------------------------------------------------

    // ------------------------------------------------------
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    // ------------------------------------------------------
    if (menuToggle && menu) {
        // --------------------------------------------------
        menuToggle.addEventListener("click", (event) => {
             
            event.stopPropagation();
            // ----------------------------------------------
            menu.classList.toggle("open");
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


// Installer-knappen 
//Registrer service worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker registrert"))
            .catch(error => console.log(error));

    });

}
//Knappen sombrukes til å installere app.
let deferredPrompt;

const installButton =
document.getElementById("installApp");

window.addEventListener(
    "beforeinstallprompt",
    (e) => {

        e.preventDefault();

        deferredPrompt = e;

        installButton.hidden = false;
    }
);
installButton.addEventListener(
    "click",
    async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        const result =
            await deferredPrompt.userChoice;

        if(result.outcome === "accepted"){

            console.log(
                "Brukeren installerte appen"
            );

        }

        deferredPrompt = null;

        installButton.hidden = true;
    }
); 

// Skjuler knappen etter installasjon
window.addEventListener(
    "appinstalled",
    () => {

        installButton.hidden = true;

        console.log("App installert");

    }
);