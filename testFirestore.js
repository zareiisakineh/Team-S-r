import { db } from "./firebase.js";

import {
    collection,
    getDocs
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function hentAnsatte() {

    const querySnapshot =
        await getDocs(collection(db, "ansatte"));

    querySnapshot.forEach((doc) => {

        console.log(doc.id, doc.data());

    });

}

hentAnsatte();