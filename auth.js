import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const innhold =
    document.getElementById("beskyttetInnhold");

const loginBox =
    document.getElementById("loginBox");

const loggutKnapp =
    document.getElementById("loggutKnapp");


onAuthStateChanged(auth, user => {

    if (user) {

        if (innhold) {
            innhold.style.display = "block";
        }

        if (loginBox) {
            loginBox.style.display = "none";
        }

        if (loggutKnapp) {
            loggutKnapp.style.display = "block";
        }

    } else {

        if (innhold) {
            innhold.style.display = "none";
        }

        if (loginBox) {
            loginBox.style.display = "block";
        }

        if (loggutKnapp) {
            loggutKnapp.style.display = "none";
        }

    }

});