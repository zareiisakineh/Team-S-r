export async function hentAnsatte() {

    console.log("Starter Firestore-henting");

    const snapshot = await getDocs(
        collection(db, "ansatte")
    );

    console.log("Firestore svarte:", snapshot.size);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}