import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const btn = document.getElementById("loginBtn");

btn.addEventListener("click", async () => {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        document.getElementById("status")
            .textContent =
            "✅ Innlogging vellykket";

    } catch (error) {

        document.getElementById("status")
            .textContent =
            "❌ Feil brukernavn eller passord";

        console.error(error);

    }

});