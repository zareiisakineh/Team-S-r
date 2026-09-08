// ==========================================================
// TEAM SØR - ansatteFirestore.js
// Henter ansatte fra Firestore
// ==========================================================

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./firebase.js";


// ==========================================================
// HENT ALLE ANSATTE
// ==========================================================

export async function hentAnsatte() {

    const snapshot = await getDocs(
        collection(db, "ansatte")
    );

    return snapshot.docs.map(doc => ({

        // Firestore-dokumentets ID
        // Brukes som unik ID for den ansatte
        id: doc.id,

        // Alle feltene fra dokumentet
        ...doc.data()

    }));

}