=============================================================================================================
=============================================================================================================

-------------------------------------------------------------------------------------------------------------
import { collection, doc, setDoc } from "firebase/firestore";
const citiesRef = collection(db, "cities");
await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
-------------------------------------------------------------------------------------------------------------
KUERI SEDERHANA

// Create a reference to the cities collection
import { collection, query, where } from "firebase/firestore";
const citiesRef = collection(db, "cities");
// Create a query against the collection.
const q = query(citiesRef, where("state", "==", "CA"));
-----------------------
import { collection, query, where } from "firebase/firestore";
const citiesRef = collection(db, "cities");
const q = query(citiesRef, where("capital", "==", true));

-------------------------------------------------------------------------------------------------------------
MENJALANKAN KUERI

import { collection, query, where, getDocs } from "firebase/firestore";
const q = query(collection(db, "cities"), where("capital", "==", true));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

-------------------------------------------------------------------------------------------------------------
OPERATOR KUERI

const stateQuery = query(citiesRef, where("state", "==", "CA"));
const populationQuery = query(citiesRef, where("population", "<", 100000));
const nameQuery = query(citiesRef, where("name", ">=", "San Francisco"));
-----------------------
Tidak sama dengan (!=)
const notCapitalQuery = query(citiesRef, where("capital", "!=", false));

-------------------------------------------------------------------------------------------------------------
KEANGGOTAAN ARRAY

import { query, where } from "firebase/firestore";
const q = query(citiesRef, where("regions", "array-contains", "west_coast"));

------------------------
in, not-in, dan array-contains-any

import { query, where } from "firebase/firestore";
const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));

------------------------
not-in
  
import { query, where } from "firebase/firestore";
const q = query(citiesRef, where('country', 'not-in', ['USA', 'Japan']));  

------------------------  
array-contains-any

import { query, where } from "firebase/firestore";
const q = query(citiesRef,
where('regions', 'array-contains-any', ['west_coast', 'east_coast']));
------------------------
import { query, where } from "firebase/firestore";
const q = query(citiesRef, where('regions', 'in', [['west_coast', 'east_coast']]));
------------------------
Batasan
-------------------------------------------------------------------------------------------------------------
KUERI GABUNGAN

import { query, where } from "firebase/firestore";
const q1 = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));
const q2 = query(citiesRef, where("state", "==", "CA"), where("population", "<", 1000000));
------------------------
import { query, where } from "firebase/firestore";
const q1 = query(citiesRef, where("state", ">=", "CA"), where("state", "<=", "IN"));
const q2 = query(citiesRef, where("state", "==", "CA"), where("population", ">", 1000000));
------------------------
import { query, where } from "firebase/firestore";
const q = query(citiesRef, where("state", ">=", "CA"), where("population", ">", 100000));
-------------------------------------------------------------------------------------------------------------
KUERI GRUP KOLEKSI

import { collection, doc, setDoc } from "firebase/firestore";
const citiesRef = collection(db, 'cities');
await Promise.all([
    setDoc(doc(citiesRef, 'SF', 'landmarks'), {
        name: 'Golden Gate Bridge',
        type: 'bridge'
    }),
    setDoc(doc(citiesRef, 'SF', 'landmarks'), {
        name: 'Legion of Honor',
        type: 'museum'
    }),
    setDoc(doc(citiesRef, 'LA', 'landmarks'), {
        name: 'Griffith Park',
        type: 'park'
    }),
    setDoc(doc(citiesRef, 'LA', 'landmarks'), {
        name: 'The Getty',
        type: 'museum'
    }),
    setDoc(doc(citiesRef, 'DC', 'landmarks'), {
        name: 'Lincoln Memorial',
        type: 'memorial'
    }),
    setDoc(doc(citiesRef, 'DC', 'landmarks'), {
        name: 'National Air and Space Museum',
        type: 'museum'
    }),
    setDoc(doc(citiesRef, 'TOK', 'landmarks'), {
        name: 'Ueno Park',
        type: 'park'
    }),
    setDoc(doc(citiesRef, 'TOK', 'landmarks'), {
        name: 'National Museum of Nature and Science',
        type: 'museum'
    }),
    setDoc(doc(citiesRef, 'BJ', 'landmarks'), {
        name: 'Jingshan Park',
        type: 'park'
    }),
    setDoc(doc(citiesRef, 'BJ', 'landmarks'), {
        name: 'Beijing Ancient Observatory',
        type: 'museum'
    })
]);
---------------------------
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
const museums = query(collectionGroup(db, 'landmarks'), where('type', '==', 'museum'));
const querySnapshot = await getDocs(museums);
querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
});

-------------------------------------------------------------------------------------------------------------
BATASAN QUERI


-------------------------------------------------------------------------------------------------------------


  