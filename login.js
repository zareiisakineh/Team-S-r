import { auth } from "./firebase.js";

import {signInWithEmailAndPassword}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Innlogging vellykket");

            location.reload();

        } catch (error) {

             console.error(error);

            alert("Feil brukernavn eller passord");

        }

    });

}