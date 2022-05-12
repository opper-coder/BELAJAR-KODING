=============================================================================================================
=============================================================================================================
-------------------------------------------------------------------------------------------------------------
MENAMBAHKAN KURSOR SEDERHANA KE KUERI
import { query, orderBy, startAt } from "firebase/firestore";
const q = query(citiesRef, orderBy("population"), startAt(1000000));
----------------------------------
import { query, orderBy, endAt } from "firebase/firestore";
const q = query(citiesRef, orderBy("population"), endAt(1000000));

-------------------------------------------------------------------------------------------------------------
MENGGUNAKAN SNAPSHOT DOKUMEN UNTUK MENENTUKAN QUERY CURSOR
import { collection, doc, getDoc, query, orderBy, startAt } from "firebase/firestore";
const citiesRef = collection(db, "cities");
const docSnap = await getDoc(doc(citiesRef, "SF"));
// Get all cities with a population bigger than San Francisco
const biggerThanSf = query(citiesRef, orderBy("popuation"), startAt(docSnap));
// ...

-------------------------------------------------------------------------------------------------------------
MEMBAGI KUERI KE DALAM BATCH

import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
// Query the first page of docs
const first = query(collection(db, "cities"), orderBy("population"), limit(25));
const documentSnapshots = await getDocs(first);
// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);
// Construct a new query starting at this document,
// get the next 25 cities.
const next = query(collection(db, "cities"),
    orderBy("population"),
    startAfter(lastVisible),
    limit(25));

-------------------------------------------------------------------------------------------------------------
MENETAPKAN KURSOR BERDASARKAN BEBERAPA KOLOM

// Will return all Springfields
import { collection, query, orderBy, startAt } from "firebase/firestore";
const q1 = query(collection(db, "cities"),
   orderBy("name"),
   orderBy("state"),
   startAt("Springfield"));
// Will return "Springfield, Missouri" and "Springfield, Wisconsin"
const q2 = query(collection(db, "cities"),
   orderBy("name"),
   orderBy("state"),
   startAt("Springfield", "Missouri"));


-------------------------------------------------------------------------------------------------------------
