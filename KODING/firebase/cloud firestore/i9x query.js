=============================================================================================================
=============================================================================================================
sebelum mnggunakan query kita harus punya data dulu, contoh:
1. bikin ref
2. set doc(5 dokumen)
3. bikin query()
4. gunakan query get() atau addSnapShotListener() 
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
- query kan ke semua kota di provinsi 'CA'

    // Create a reference to the cities collection
    import { collection, query, where } from "firebase/firestore";  // import
    const citiesRef = collection(db, "cities");                     // ref 
    // Create a query against the collection.
    const q = query(citiesRef, where("state", "==", "CA"));         // bikin query dg ref yang ada, where(prov = CA)
    -----------------------
    - query kan ke semua kota
    import { collection, query, where } from "firebase/firestore";  // import
    const citiesRef = collection(db, "cities");                     // ref ke koleksi kota
    const q = query(citiesRef, where("capital", "==", true));       // bikin query dg ref yang ada, where(capital = ya)

-------------------------------------------------------------------------------------------------------------
MENJALANKAN KUERI
-  Setelah membuat objek kueri, gunakan fungsi get() untuk mengambil hasilnya:
    import { collection, query, where, getDocs } from "firebase/firestore";     // import
    const q = query(collection(db, "cities"), where("capital", "==", true));    // query(ref,where)
    const querySnapshot = await getDocs(q);                                     // getDocs(q)
    querySnapshot.forEach((doc) => {                                            // query.loop(tampilkan)
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

-------------------------------------------------------------------------------------------------------------
OPERATOR KUERI
Metode where() memerlukan tiga parameter: 
1. kolom untuk memfilter 
2. operator perbandingan 
3. dan nilai. 
operator perbandingan berikut ini:
< <= == >= > !=, array-contains, array-contains-any, in, not-in
kalau di android sama dengan di tulis dengan whereEqualTo("kec", "nuhon") dst
    const stateQuery = query(citiesRef, where("state", "==", "CA"));
    const populationQuery = query(citiesRef, where("population", "<", 100000));
    const nameQuery = query(citiesRef, where("name", ">=", "San Francisco"));
    -----------------------
    Tidak sama dengan (!=)
    - operator != akan menampilkan kolom yang berisi:
        - nilai biasa
        - ""
        - null
        - false
        - NaN
    - operator != akan mengecualikan pencarian
        - dokumen yng tidak memiliki kolom dimaksud 
        - undefined (kayaknya begitu coba praktekan)
contoh:
    const notCapitalQuery = query(citiesRef, where("capital", "!=", false));

-------------------------------------------------------------------------------------------------------------
KEANGGOTAAN ARRAY
Anda dapat menggunakan operator array-contains untuk memfilter berdasarkan nilai array.
    import { query, where } from "firebase/firestore";                              // import
    const q = query(citiesRef, where("regions", "array-contains", "west_coast"));   // where("K","operator","V")

------------------------
in
- operator ini hampir sama dengan OR hingga 10 

    import { query, where } from "firebase/firestore";                              // import
    const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));           // where(USA or JAPAN)

------------------------
not-in
- operator ini hampir sama dengan != (tidak termasuk dalam) hingga 10 
    import { query, where } from "firebase/firestore";                              // import
    const q = query(citiesRef, where('country', 'not-in', ['USA', 'Japan']));       // where(bukan USA JAPAN NULL)

------------------------  
array-contains-any
- mirip DISTINC PHP 
    import { query, where } from "firebase/firestore";                      // import
    const q = query(citiesRef,                                              // query
    where('regions', 'array-contains-any', ['west_coast', 'east_coast']));  // menapilkan 1 data duplikat 
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

=============================================================================================================
