================================================================================================
================================================================================================
------------------------------------------------------------------------------------------------
BACA DATA SEKALI
- ini data nya misalnya:
    import { collection, doc, setDoc } from "firebase/firestore";           // import
    const citiesRef = collection(db, "cities");                             // ref coll: collection()
    await setDoc(doc(citiesRef, "SF"), {                                    // set data: setDoc(doc())
        name: "San Francisco", state: "CA", country: "USA",                 // isi id "SF" dst
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
------------------------------------------------------------------------------------------------
- Contoh berikut menunjukkan cara mengambil konten dari sebuah dokumen menggunakan get():
    import { doc, getDoc } from "firebase/firestore";       // import
    const docRef = doc(db, "cities", "SF");                 // ref dok
    const docSnap = await getDoc(docRef);                   // baca dengan getDok()
    if (docSnap.exists()) {                                 // 
    console.log("Document data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
------------------------------------------------------------------------------------------------
- OPSI CACHE
    getDocFromCache() pada method ini:

    import { doc, getDocFromCache } from "firebase/firestore";                  // import
    const docRef = doc(db, "cities", "SF");                                     // ref doc: doc()
    // ambil dokumen, SDK memaksa ambil dari cache offline. pada try catch
    try {                                                        
      const doc = await getDocFromCache(docRef);                
                                                            // dokumen di temukan di cache. jika tidak di temukan
                                                            // maka error dan akan di tangani oleh catch
      console.log("Cached document data:", doc.data());
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
------------------------------------------------------------------------------------------------
- CLASS 
    keterangan periksa selanjutnya
    class City {
        constructor (name, state, country ) {
            this.name = name;
            this.state = state;
            this.country = country;
        }
        toString() {
            return this.name + ', ' + this.state + ', ' + this.country;
        }
    }

    // Firestore data converter
    const cityConverter = {
        toFirestore: (city) => {
            return {
                name: city.name,
                state: city.state,
                country: city.country
                };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new City(data.name, data.state, data.country);
        }
    };
--------------------
    import { doc, getDoc} from "firebase/firestore";
    const ref = doc(db, "cities", "LA").withConverter(cityConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      // Convert to City object
      const city = docSnap.data();
      // Use a City instance method
      console.log(city.toString());
    } else {
      console.log("No such document!");
    }
------------------------------------------------------------------------------------------------
MENDAPATKAN BEBERAPA DOKUMEN DARI KOLEKSI
- defaultnya asc, tapi masih bisa di limit dan desc pada mode sorting di bagian lain
    import { collection, query, where, getDocs } from "firebase/firestore";     // import
    const q = query(collection(db, "cities"), where("capital", "==", true));    // query, where(syarat)
    const querySnapshot = await getDocs(q);                                     // ambil dengan get()
    querySnapshot.forEach((doc) => {                                            // loop hasilnya sesuai syarat
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

------------------------------------------------------------------------------------------------
MENDAPATKAN SEMUA DOKUMEN DALAM KOLEKSI
- dengan menghilangkan filter where() maka semua di dapat
    import { collection, getDocs } from "firebase/firestore";           // import
    const querySnapshot = await getDocs(collection(db, "cities"));      // ambil semua doc tanpa where
    querySnapshot.forEach((doc) => {                                    // looping
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
------------------------------------------------------------------------------------------------
MENDAPATKAN BEBERAPA DOKUMEN DARI SEBUAH GRUP KOLEKSI
- Grup koleksi terdiri dari semua koleksi dengan ID yang sama. 
  Misalnya, jika setiap dokumen dalam koleksi cities memiliki subkoleksi 
  yang disebut landmarks, maka semua subkoleksi landmarks tergabung 
  dalam grup koleksi yang sama. Secara default, 
  kueri mengambil hasil dari satu koleksi di database Anda. 
  Gunakan kueri grup koleksi untuk mengambil hasil dari grup koleksi, 
  bukan dari satu koleksi.
------------------------------------------------------------------------------------------------
MENAMPILKAN DAFTAR SUBKOLEKSI DOKUMEN
    Metode library klien server Cloud Firestore listCollections() 
    menampilkan daftar semua subkoleksi referensi dokumen.
    Pengambilan daftar koleksi tidak dapat dilakukan dengan library klien seluler/web. 
    Anda sebaiknya hanya mencari nama koleksi sebagai bagian dari tugas administratif 
    di lingkungan server yang tepercaya. Jika ternyata Anda memerlukan 
    kemampuan ini pada library klien seluler/web, 
    sebaiknya buat ulang struktur data Anda sehingga nama subkoleksi mudah diprediksi.
    
------------------------------------------------------------------------------------------------
=======
