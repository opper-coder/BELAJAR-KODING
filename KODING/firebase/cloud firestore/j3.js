HALAMAN REFERENSI DARI i3 index sort

--------------------------------------------------------------------------------------------
CONTOH 1
cakupan query koleksi default di buat oleh firebase:

    var citiesRef = db.collection("kotaDiPalu");

    citiesRef.doc("i1_Palu").set({
        name: "kota palu", state: "Provinsi", country: "sulawesi tengah",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    citiesRef.doc("i2_Poso").set({
        name: "Los Angeles", state: "kabupaten", country: "sulawesi tengah",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    citiesRef.doc("i3_Ampana").set({
        name: "Washington, D.C.", state: null, country: "sulawesi tengah",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    citiesRef.doc("i4_Luwuk").set({
        name: "Tokyo", state: null, country: "sultim",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    citiesRef.doc("i5_donggala").set({
        name: "Beijing", state: null, country: "sultim",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });    
--------------------------------------------------------------------------------------------
CONTOH 2
query pada tabel di atas yaitu index otomatis default:

    const stateQuery = citiesRef.where("state", "==", "CA");
    const populationQuery = citiesRef.where("population", "<", 100000);
    const nameQuery = citiesRef.where("name", ">=", "San Francisco");
--------------------------------------------------------------------------------------------
CONTOH 2
Anda juga dapat membuat kueri in dan kueri kesetaraan (==) gabungan:

    citiesRef.where('country', 'in', ["USA", "Japan", "China"])

    // Compound equality queries
    citiesRef.where("state", "==", "CO").where("name", "==", "Denver")
    citiesRef.where("country", "==", "USA")
             .where("capital", "==", false)
             .where("state", "==", "CA")
             .where("population", "==", 860000)
--------------------------------------------------------------------------------------------
Jika perlu menjalankan kueri gabungan yang menggunakan perbandingan rentang (<, <=, >, atau >=) 
atau jika perlu melakukan pengurutan berdasarkan kolom yang berbeda, 
Anda harus membuat indeks komposit untuk kueri tersebut.

Indeks array-contains memungkinkan Anda membuat kueri untuk kolom array regions:

    citiesRef.where("regions", "array-contains", "west_coast")
    // array-contains-any and array-contains use the same indexes
    citiesRef.where("regions", "array-contains-any", ["west_coast", "east_coast"])
















