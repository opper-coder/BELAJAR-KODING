QUERY
---------------------------------------
query bersifat jamak, "koleksi" atau "grup koleksi". 
kueri adalah menentukan dokumen mana yang ingin Anda ambil dari "koleksi" atau "grup koleksi". 
Kueri dapat digunakan dengan get() atau addSnapshotListener(), seperti pembaca data tunggal cekidoc

BIKIN DATA DULU
---------------------------------------
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


BASIC
---------------------------------------
import { collection, query, where } from "firebase/firestore";              // import 
const citiesRef = collection(db, "cities");                                 // ref ke collection
const q = query(citiesRef, where("state", "==", "CA"));                     // bikin query: semua data yang: state == CA 

MENJALANKAN KUERI
---------------------------------------
- Setelah membuat objek kueri, gunakan fungsi get() untuk mengambil hasilnya:
- pada penggunaan getDoc() 
- disini berlaku juga: mendapatkan data sekali getDoc() atau realtime (berkali2) onSnapshot() cekidoc

import { collection, query, where, getDocs } from "firebase/firestore";     // import
const q = query(collection(db, "cities"), where("capital", "==", true));    // query where 
const querySnapshot = await getDocs(q);                                     // panggil query dalam getDoc() 
querySnapshot.forEach((doc) => {                                            // hasilnya, di looping
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

OPERATOR KUERI
---------------------------------------
- Metode where() memerlukan tiga parameter: kolom untuk memfilter, operator perbandingan, dan nilai.
- operator: <, <=, ==, >, >=, !=, array-contains, array-contains-any, in, not-in, 
- Anda tidak dapat menggabungkan not-in dan != dalam kueri gabungan.
- Pada kueri gabungan, perbandingan rentang (<,>,<=,>=) dan != jika di gabungkan dengan (!=, not-in) harus memfilter kolom yang sama.

QUERY TUNGGAL
---------------------------------------
import { query, where } from "firebase/firestore";                          // import where pada stiap query
const stateQuery = query(citiesRef, where("state", "==", "CA"));            // cari state == CA
const populationQuery = query(citiesRef, where("population", "<", 100000)); // cari population < 100000
const nameQuery = query(citiesRef, where("name", ">=", "San Francisco"));   // >=
const notCapitalQuery = query(citiesRef, where("capital", "!=", false));    // ingat "", nan, false, undefined, null, dll itu dianggap true, yang di cari adalh yg benar2 kosong

QUEREY ARRAY
---------------------------------------
query gabungan terikat dengan aturan
    - jumlah kolom yang di bandingkan
    - dalam satu kolom atau beda
    - pasangan operator yang bisa di dukung
    - grup koleksi
    - ada or() query, ini masih proposal dan pengujian, belum tentu menjadi propietary nantinya
        sepertinya menjanjikan


AND                 : const populationQuery = query(citiesRef, where("population", "<", 100000), where("population", ">", 1000))    // population < 100000 AND population > 100000
in (OR)             : const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));                                         // adakah dalam kolom? berisi array? berisi contain: 'USA' OR 'japan' 
in (OR, AND)        : const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']), where('capoital', "==", true ));         // bisa di gabung dengan AND OR
not-in              : const q = query(citiesRef, where('country', 'not-in', ['USA', 'Japan']));                                     // mirip in, kalau di gabung max 10 penggabungan,             
array-contains      : const q = query(citiesRef, where("regions", "array-contains", "west_coast"));                                 // adakah dalam kolom? berisi array? berisi contain: 'west_coast' (tunggal)(khusus untuk pencarian array)
array-contains-any  : const q = query(citiesRef, where('regions', 'array-contains-any', ['west_coast', 'east_coast']));             // mirip array-contains, bedanya pembandingnya boleh lebih dari satu(jamak), ['west_coast' OR 'east_coast']

QUERY GABUNGAN
---------------------------------------
Anda dapat menggabungkan batasan dengan AND yang logis dengan menggabungkan beberapa operator kesetaraan (== atau array-contains). 
Namun, Anda harus membuat indeks komposit untuk menggabungkan operator kesetaraan dengan operator ketidaksetaraan, <, <=, >, dan != Google.

import { query, where } from "firebase/firestore";
const q1 = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));         //  bisa == AND == | tidak bisa == AND == AND < 
const q2 = query(citiesRef, where("state", "==", "CA"), where("population", "<", 1000000));     //  bisa == AND <  | bisa == AND array-contens

ORDER DAN LIMIT
---------------------------------------
- default: data akan diambil semua sesuai syarat dalam query, dan di urutkan asc (menaik) 
- anda dapat manipulasi urutan dengan orderBy(), dan membatasi jumlah dengan limit()
- syarat limit jumlah batasan harus >= 0

import { query, where, orderBy, limit } from "firebase/firestore";                              // import yg diperlukan
const q = query(citiesRef, orderBy("name"), limit(3));                                          // urut ASC  berdasar nama, ambil <= 3 data
const q = query(citiesRef, orderBy("name", "desc"), limit(3));                                  // urut DESC berdasar nama, ambil <= 3 data
const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));                    // orderBy lebih dari saru kolom
const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));  // gambungkan where(), orderBy(), limit()
const q = query(citiesRef, where("population", ">", 100000), orderBy("country"));               // orderBy harus satu kolom dengan where(population:country), disini contoh yg tidak valid 


---------------------------------------
