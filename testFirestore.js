import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function hentAnsatte() {

    const snapshot = await getDocs(
        collection(db, "ansatte")
    );

    const ansatte = [];

    snapshot.forEach(doc => {
        ansatte.push(doc.data());
    });

    console.log("Antall ansatte:", ansatte.length);
    console.log(ansatte);
}

hentAnsatte();