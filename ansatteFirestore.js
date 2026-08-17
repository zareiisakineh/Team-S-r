
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./firebase.js";


// ==========================================================
// CACHE FOR ANSATTE
// ==========================================================

const CACHE_KEY = "teamSor_ansatte";


// ==========================================================
// HENT ANSATTE
// ==========================================================

export async function hentAnsatte() {

    // ------------------------------------------------------
    // Sjekk om ansatte allerede ligger i nettleseren
    // ------------------------------------------------------

    const lagret = sessionStorage.getItem(CACHE_KEY);

    if (lagret) {

        console.log(
            "Ansatte hentet fra sessionStorage"
        );

        return JSON.parse(lagret);
    }


    // ------------------------------------------------------
    // Ingen cache → hent fra Firestore
    // ------------------------------------------------------

    console.log(
        "Henter ansatte fra Firestore..."
    );

    const snapshot = await getDocs(
        collection(db, "ansatte")
    );


    const ansatte = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));


    // ------------------------------------------------------
    // Lagre ansatte i sessionStorage
    // ------------------------------------------------------

    sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify(ansatte)
    );


    console.log(
        "Ansatte lagret i sessionStorage:",
        ansatte.length
    );


    return ansatte;
}
```
