// ==========================================================
// TEAM SØR - app.js
// ==========================================================

console.log("app.js loaded");

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

console.log("KOM TIL SERVICE WORKER DELEN");
if ("serviceWorker" in navigator) {

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

}

