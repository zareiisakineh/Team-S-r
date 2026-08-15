import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const forslagForm =
    document.getElementById("forslagForm");


if (forslagForm) {

    forslagForm.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            const navn =
                document.getElementById("navn").value;

            const kategori =
                document.getElementById("kategori").value;

            const tekst =
                document.getElementById("forslag").value;


            try {

                console.log("Sender forslag...");

                await addDoc(
                    collection(db, "forslag"),
                    {
                        navn: navn,
                        kategori: kategori,
                        tekst: tekst,
                        dato: serverTimestamp(),
                        status: "Ny"
                    }
                );


                console.log(
                    "Forslag lagret i Firestore!"
                );

                document.getElementById(
                    "melding"
                ).textContent =
                    "Forslaget er sendt!";


                forslagForm.reset();


            } catch (error) {

                console.error(
                    "Feil ved lagring av forslag:",
                    error
                );

                document.getElementById(
                    "melding"
                ).textContent =
                    "Det oppstod en feil ved sending av forslaget.";

            }

        }
    );

}