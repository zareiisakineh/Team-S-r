import { hentAnsatte } from "./ansatteFirestore.js";

console.log("app.js loaded");

document.addEventListener("click", (event) => {

    const button = event.target.closest(".question");

    if (!button) return;

    const currentItem = button.parentElement;
    const currentAnswer = currentItem.querySelector(".answer");


    // Lukk alle andre
    document.querySelectorAll(".item").forEach(item => {

        if (item !== currentItem) {

            item.querySelector(".answer")
                ?.classList.remove("open");

            item.querySelector(".icon")
                ?.classList.remove("rotate");
        }

    });


    // Åpne/lukk det som ble klikket
    currentAnswer.classList.toggle("open");

    button.querySelector(".icon")
        ?.classList.toggle("rotate");

});


/* HENT ANSATTE FRA FIRESTORE */
const ansatte = await hentAnsatte();
// test for å se nøyaktig hvilke gruppenavn som finnes i databasen
console.log(ansatte.map(a => a.gruppe));

// Kontakt-kort
// Lager fire lister ut fra gruppene:
//henter alle sykepleiere fra firestore
const sykepleier = ansatte.filter(person => {
    return  person.gruppe === "Sykepleiere";
});
//henter alle Helsefagarbeidere fra ansatt.js
const hjelpepleier = ansatte.filter(person => {
    return  person.gruppe === "Helsefagarbeidere";
});
//henter alle i praktisk bistand fra ansatt.js
const praktiskBistand = ansatte.filter(person => {
    return  person.gruppe === "PraktiskBistand";
});
//henter alle ekstravakter fra ansatt.js
const ekstravakt = ansatte.filter(person => {
    return  person.gruppe === "Ekstravakter";
});
//henter alle fysioterapeuter fra ansatt.js
const fysioterapeut = ansatte.filter(person => {
    return  person.gruppe === "fysioterapeuter";
});
//henter alle fysioterapeuter fra ansatt.js
const ergoterapeut = ansatte.filter(person => {
    return  person.gruppe === "ergoterapeuter";
});
//henter alle fysioterapeuter fra ansatt.js
const AKS = ansatte.filter(person => {
    return  person.gruppe === "AKS";
});
//henter alle ernæringsfysiologer fra ansatt.js
const ernæringsfysiolog = ansatte.filter(person => {
    return  person.gruppe === "ernæringsfysiologer";
});
//henter alle ledere fra ansatt.js
const leder = ansatte.filter(person => {
    return  person.gruppe === "ledere";
});
//henter alle merkantiler fra ansatt.js
const merkantil = ansatte.filter(person => {
    return  person.gruppe === "merkantiler";
});
//henter alle nattevakter fra ansatt.js
const nattevakt = ansatte.filter(person => {
    return  person.gruppe === "nattevakter";
});
//henter alle vurderingsteam fra ansatt.js
const vurderingsteam = ansatte.filter(person => {
    return  person.gruppe === "vurderingsteam";
});
//henter alle responssenter fra ansatt.js
const responssenter = ansatte.filter(person => {
    return  person.gruppe === "responssenter";
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

//deler bursdagsmelding på whatsapp 
const whatsappKnapp =
document.getElementById("sendWhatsapp");

if (whatsappKnapp) {

    whatsappKnapp.addEventListener("click", () => {

        const whatsappMelding =
            "🎂 Gratulerer med dagen kjære " +
            navn.join(" og ") +
            "!\n\n" +
            "Alle oss i Team Sør ønsker deg en fantastisk dag fylt med glede, smil og kake! 🎂❤️";

        const url =
            "https://wa.me/?text=" +
            encodeURIComponent(whatsappMelding);

        window.open(url, "_blank");

    });

}

// Installer-knappen 
//Registrer service worker
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

   const installBtn = document.getElementById("installApp");

if (installBtn) {
    installBtn.hidden = false;
}

});

const installBtn = document.getElementById("installApp");

if (installBtn) {

    installBtn.addEventListener("click", async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;

        installBtn.hidden = true;
    });

}





