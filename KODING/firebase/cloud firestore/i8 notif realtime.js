====================================================================================================
====================================================================================================
----------------------------------------------------------------------------------------------------
PEMBARUAN REALTIME DENGAN CLOUD FIRESTORE
- dengan metod onSnapshot(). menggunakan callback yang Anda berikan akan segera membuat snapshot realtime
    import { doc, onSnapshot } from "firebase/firestore";           // import
    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {    // onSnapshot(ref, callback) call back akan --
        console.log("Current data: ", doc.data());                  // -- tampilkan data terkini (itu intinya)
    });

-----------------------------------------------------------------------------------------------------
PERISTIWA UNTUK PERUBAHAN LOKAL
- 
    import { doc, onSnapshot } from "firebase/firestore";

    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
    });

-----------------------------------------------------------------------------------------------------
PERISTIWA UNTUK PERUBAHAN METADATA
- 
    import { doc, onSnapshot } from "firebase/firestore";

    const unsub = onSnapshot(
      doc(db, "cities", "SF"),
      { includeMetadataChanges: true },
      (doc) => {
        // ...
      });
-----------------------------------------------------------------------------------------------------
MEMPROSES BEBERAPA DOKUMEN DALAM KOLEKSI
- 
    import { collection, query, where, onSnapshot } from "firebase/firestore";
    const q = query(collection(db, "cities"), where("state", "==", "CA"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
          cities.push(doc.data().name);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
    
-----------------------------------------------------------------------------------------------------
MELIHAT PERUBAHAN ANTAR-SNAPSHOT

import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

-----------------------------------------------------------------------------------------------------
MELIHAT PERUBAHAN ANTAR-SNAPSHOT
- 
    import { collection, query, where, onSnapshot } from "firebase/firestore";
    const q = query(collection(db, "cities"), where("state", "==", "CA"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data());
        }
        if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
        }
      });
    });
    
-----------------------------------------------------------------------------------------------------
MELEPASKAN PEMROSES
- 
    import { collection, onSnapshot } from "firebase/firestore";
    const unsubscribe = onSnapshot(collection(db, "cities"), () => {
      // Respond to data
      // ...
    });

    // Later ...

    // Stop listening to changes
    unsubscribe();

-----------------------------------------------------------------------------------------------------
MENANGANI ERROR PEMROSESAN
-     
    import { collection, onSnapshot } from "firebase/firestore";
    const unsubscribe = onSnapshot(
    collection(db, "cities"),
    (snapshot) => {
    // ...
    },
    (error) => {
    // ...
    });
    
 -----------------------------------------------------------------------------------------------------
     
     
     
     
