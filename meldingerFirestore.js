import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export async function hentMeldinger() {

    const snapshot =
        await getDocs(collection(db, "meldinger"));

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}