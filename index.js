import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Bilder på første side
const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    touchNavigation: true,
    keyboardNavigation: true,
    closeButton: true
});


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
const closeInstallModal = document.getElementById("closeInstallModal");

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

    const erInstallert = window.matchMedia("(display-mode: standalone)").matches;

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

    const result = await deferredPrompt.userChoice;

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


// ==========================================================
// LAGRE FORSLAG I FIRESTORE
// ==========================================================

const forslagForm = document.getElementById("forslagForm");

if (forslagForm) {

    forslagForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        try {

            await addDoc(
                collection(db, "forslag"),
                {
                    navn: document.getElementById("navn").value,

                    kategori:
                        document.getElementById("kategori").value,

                    tekst:
                        document.getElementById("forslag").value,

                    dato: serverTimestamp(),

                    status: "Ny"
                }
            );

            document.getElementById("melding").textContent =
                "Forslaget er sendt!";

            forslagForm.reset();

        } catch (error) {

            console.error(
                "Feil ved lagring av forslag:",
                error
            );

            document.getElementById("melding").textContent =
                "Feil ved sending.";

        }

    });

}