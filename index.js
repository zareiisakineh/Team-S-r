

// ==========================================================
// FIRESTORE - HENT ANSATTE
// ==========================================================

import { hentAnsatte } from "./ansatteFirestore.js";
import { db } from "./firebase.js";

// import fra firestore for å håndtere meldinger
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const ansatte = await hentAnsatte();

console.log("Antall ansatte:", ansatte.length);


// import fra firestore for å håndtere forslag
import {
    collection,
    addDoc,
    serverTimestamp
}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Bilder på første side
const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    touchNavigation: true,
    keyboardNavigation: true,
    closeButton: true
});

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

const vaktmester = ansatte.filter(person =>
    person.gruppe === "vaktmestre"
);

const saksbehandler = ansatte.filter(person =>
    person.gruppe === "saksbehandlere"
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

if (document.getElementById("vaktmester")) {
    visGruppe("vaktmester", vaktmester);
}

if (document.getElementById("saksbehandler")) {
    visGruppe("saksbehandler", saksbehandler);
}

/*------------------------------------------------
    POP-UP MELDINGER
------------------------------------------------*/

async function visMeldingFraFirestore() {

    try {

        const ref = doc(db, "system", "aktuellMelding");

        const snap = await getDoc(ref);

        if (!snap.exists()) {

            console.log(
                "Ingen aktuell melding."
            );

            return;
        }

        const melding = snap.data();

        if (!melding.aktiv) {

            console.log(
                "Aktuell melding er deaktivert."
            );

            return;
        }

        const popup = document.getElementById("meldingPopup");

        const popupTittel = document.getElementById("popupTittel");

        const popupTekst = document.getElementById("popupTekst");

        const popupDato = document.getElementById("popupDato");

        if (!popup || !popupTittel || !popupTekst) {

            console.log(
                "Popup-elementene finnes ikke på denne siden."
            );

            return;
        }

        popupTittel.textContent =
            melding.tittel ?? "";

        popupTekst.textContent =
            melding.tekst ?? "";

        if (popupDato) {

            popupDato.textContent =
                melding.dato ?? "";

        }

        popup.style.display =
            "flex";

        console.log(
            "Melding vist:",
            melding
        );

    } catch (error) {

        console.error(
            "Kunne ikke hente melding fra Firestore:",
            error
        );

    }

}


/*------------------------------------------------
    LUKK POPUP
------------------------------------------------*/

const popupLukk = document.getElementById("popupLukk");

if (popupLukk) {

    popupLukk.addEventListener("click", () => {

        const popup = document.getElementById("meldingPopup");

        if (popup) {

            popup.style.display = "none";

             sessionStorage.setItem(
            "meldingVist",
            "ja"
        );

        }

    });

}

// ==========================================================
// INSTALLER TEAM SØR – ENKEL LØSNING
// Android / iPhone / iPad / PC----Installasjonsboks
// ==========================================================
let deferredPrompt;
//Denne koden lagrer installasjonsforespørselen slik at vi kan bruke den senere
   window.addEventListener(
    "beforeinstallprompt",
    (e) => {

        e.preventDefault();

        deferredPrompt = e;

        console.log(
            "Appen kan installeres"
        );

    }
);

const installButton = document.getElementById("installApp");
const installModal = document.getElementById("installModal");
const closeInstallModal =
document.getElementById("closeInstallModal");

if (installButton) {

    installButton.hidden = false;

    installButton.addEventListener("click", () => {

        installModal.style.display = "block";

    });

}


if (closeInstallModal) {

    closeInstallModal.addEventListener("click", () => {

        installModal.style.display = "none";

    });

}

window.addEventListener("click", (event) => {

    if (event.target === installModal) {

        installModal.style.display = "none";

    }

});

window.addEventListener("load", async () => {

    const erInstallert =
        window.matchMedia(
            "(display-mode: standalone)"
        ).matches;

    if (erInstallert) return;

    const svar =
        confirm(
            "📲 Team Sør kan installeres som app. Vil du installere nå?"
        );

    if (!svar) return;

    if (deferredPrompt) {

         console.log(
        "Starter installasjon"
    );

    deferredPrompt.prompt();

    const result =
        await deferredPrompt.userChoice;

    console.log(
        "Installasjonsvalg:",
        result.outcome
    );

    deferredPrompt = null;

} else {

     console.log(
        "beforeinstallprompt ikke tilgjengelig"
    );

    installModal.style.display =
        "block";

}

});


/*------------------------------------------------
    VIS MELDING NÅR SIDEN LASTES
------------------------------------------------*/

console.log("KJØRER MELDINGSFUNKSJONEN NÅ");

visMeldingFraFirestore();


console.log("================================");
console.log("MELDINGSDELEN I APP.JS ER LASTET");
console.log("================================");





