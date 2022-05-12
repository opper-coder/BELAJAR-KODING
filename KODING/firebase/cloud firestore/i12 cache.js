===========================================================================================================
===========================================================================================================
-----------------------------------------------------------------------------------------------------------
MENGAKSES DATA SECARA OFFLINE
-----------------------------------------------------------------------------------------------------------
MENGONFIGURASI PERSISTENSI OFFLINE

import { enableIndexedDbPersistence } from "firebase/firestore";
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully
-----------------------------------------------------------------------------------------------------------
MENGONFIGURASI UKURAN CACHE

import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
const firestoreDb = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

-----------------------------------------------------------------------------------------------------------
MEMPROSES DATA OFFLINE

import { collection, onSnapshot, where, query } from "firebase/firestore";
const q = query(collection(db, "cities"), where("state", "==", "CA"));
onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data());
        }
        const source = snapshot.metadata.fromCache ? "local cache" : "server";
        console.log("Data came from " + source);
    });
});

-----------------------------------------------------------------------------------------------------------
MENDAPATKAN DATA OFFLINE

-----------------------------------------------------------------------------------------------------------
MEMBUAT KUERI TERHADAP DATA OFFLINE

-----------------------------------------------------------------------------------------------------------
MENONAKTIFKAN DAN MENGAKTIFKAN AKSES JARINGAN
import { disableNetwork } from "firebase/firestore";
await disableNetwork(db);
console.log("Network disabled!");
// Do offline actions
// ...
-----------------------------
import { enableNetwork } from "firebase/firestore";
await enableNetwork(db);
// Do online actions
// ...
-----------------------------------------------------------------------------------------------------------


