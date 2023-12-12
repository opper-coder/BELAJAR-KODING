/*
STANDARD LIBRARY
seperti di microsoft excel selain kita dapat melakukan kalkulasi native,
kita juga disediakan fungsi fungsi standard. seperti sum, if, date, number dll
demikian juga di javascript. ada banyak tapi kita akan bahas yang penting saja

Daftar isi:
- Number                        -> konversi text ke angka
    - Number.isNaN(Value)       -> bool. cek nan
    - Number.isInteger(value)   -> bool. cek integer
    ? Number.toLocalString(locale) untuk mengubah number menjadi string sesuai locale : 
    ? Number.toString(radix) untuk mengubah number menjadi string sesuai radix
- string 
    - name.toUpperCase()        -> instance Number (capitalize)
    - name.toLowerCase()        ->
    - name.lenght               -> tanpa kurung
    - name.split(" ")           -> array
- Array
    - for of                    -> syntax: looping value
    - for in                    -> syntax: looping index
    - forEach()                 -> method: looping value forEach( value => halo index )
    - push()                    -> menabah di akhir index
    - shift()                   -> menghapus index di awal 
    - pop                       -> menghapus index di belakang
    - find                      -> 
    - findIndex                 -> 
    - includes                  -> 
    - indexOf                   -> 
    - lastIndex                 -> 
    - filter                    -> 
    - map                       -> 
    - reduce                    -> 
    - reduceRibht               -> 
- Object
    - freeze                    ->
    - assign                    ->
    - values                    ->
    - getOwnPropertyNames     
- JSON
    - stringify                 ->
    - parse                     ->
- DATE
    - new Date                  ->
    - new Date(year, month, date)          ->
    - new Date(year, month, date, hour, minute, second, millis)          ->
    - new Date(timestamp)       ->
    - now
    - getTime()                 -> epoch & unix time
    - Date.parse                -> 
    - getFullYear               ->
    - getMonth                  ->
    - getDate                   ->
    - getHours                  ->
    - getSeconds                ->
    - getMilliseconds           ->
    - getTimezoneOffset         ->
- MATH
    - max                       ->
    - min                       ->
    - round                     ->
    - ceil
    - floor                     ->
    - average                   -> 
- BOOLEAN
    - boolean.toString          ->
    - boolean.ValueOf           ->
- MAP
    - size                      ->
    - clear()                   ->
    - delete(key)               ->
    - get(key) : value          ->
    - has(key) : boolean        ->
    - set(key, value)           ->
    - forEach((key, value) => ) ->
- SET   
    - size                      -> Panjang Set
    - add(value)                -> Menambah data ke Set
    - has(value)                -> Mengecek apakah Set memiliki value
    - delete(value)             -> Menghapus value dari Set
    - forEach(value => )        -> Melakukan iterasi Set
- SYMBOL
    - symbol
    - symbol.for
- REGEXP
    - new RegExp()
    - exec()
    - test()
    - i                         -> Regex menjadi incase sensitive
    - g                         -> Pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti
    - m                         -> Multiline, pencarian dilakukan di tiap baris (enter)
    - match(regex) : Array      -> Mencari semua data yang sesuai dengan regex
    - search(regex) : index     -> Mencari index data yang sesuai dengan regex
    - replace(regex, value)     -> Mengubah data dengan value yang sesuai regex
    - replaceAll(regex, value)      -> Mengubah semua data dengan value yang sesuai regex
    - split(regex) : Array      -> Memotong string dengan regex
- PROXY
    - new Proxy                 ->
    - get                       ->
    - set                       ->
- REFLECT
    - set()
    - has()
- ENCODE
    - encodeURI(value)              -> Melakukan encode value, namun karakter yang dipesan di URI tidak akan diubah ;,/?:@&=+$#
    - encodeURIComponent(value)     -> Melakukan encode value semua karakter
    - decodeURI(encoded)            -> Melakukan decode value hasil encodeURI()
    - decodeURIComponent(encoded)   -> Melakukan decode value hasil encodeURIComponent()
    - encodeURI                     ->
    - decodeURI                     ->
    - encodeURIComponent            ->
    - decodeURIComponent            ->
- Base64
    - btoa(value)                   -> Encode ke base64 dari value
    - atob(encoded)                 -> Decode dari base64 ke value
- Eval
    - eval()                        -> 

MAATERI SELANJUTNYA:
    JavaScript Modules
    JavaScript Document Object Model
    JavaScript Async
    JavaScript Web API


-------------------------------------------------------------------------- */
/* cara pengetesan gunakan tool di bawah ini selanjutnya 
hanya di tulis nama dan keteranganya saja 
Number memiliki banyak static properties, seperti :
Number.MIN_VALUE untuk mendapat number minimal
Number.MAX_VALUE untuk mendapat number maksimal
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties 
?????
*/
    const input = "12345";          // variabel
    const hasil = Number(input);    // method / func
    console.info(hasil);            // console.log

/* konversi text ke angka Jika data tidak bisa dikonversi ke number, 
secara otomatis hasilnya adalah NaN*/
 /* Number --------------- */                    
    const input = "12345";
    const hasil = Number(input);
    console.info(hasil);

    isNaN(10)
    Number.isInteger(value)
 /* String --------------- */ 
 /* Array ---------------- 
    Sebelumnya kita biasa menggunakan for in dan for of untuk melakukan iterasi Array, 
    namun Array juga memiliki method yang bernama forEach()
    Method forEach bisa digunakan juga untuk melakukan iterasi data array
     */                      
        const nama = ["aqil","iza","silmi"];
        const angka = [1,2,3,4,5,1,2,3,4,5];
        // for( of ){}: syntax looping value
            for( n of nama ){ console.table(nama) } // console(n juga boleh)
        // for( in ){}: syntax looping index
            for( n in nama ){ console.table(nama) } // console(n juga boleh) khusus untuk index 
        // forEach(): looping dengan callback   
            nama.forEach( value => console.log(`halo ${value}` ) )           
            nama.forEach( (index, value) => {console.log(index); console.log(value)} )           
        // push: tambah di akhir
            nama.push("faqih");         
        // shift: hapus di awal
            nama.shift();                  
        // pop: hapus di akhir
            nama.pop();                  
        // find: cari sesuai kondisi ?????
            angka.find( value => bool );
        // findIndex: cari pada index ke ?????
            angka.findIndex( value => bool );
        // includes: true
            angka.includes(4)
        // indexOf: 
                            
        // lastIndex              
        // filter                 
        // map                    
        // reduce                 
        // reduceRibht            
 Object
    freeze                
    assign                
    values                
    getOwnPropertyNames     
 JSON
    stringify             
    parse                 
 DATE
    const tanggal = new Date()         // praktek umumnya, tinggal console.log()
    new Date()                         // kalau kosong, result sekarang              
    new Date('2022-12-24')             // result data yang kita tentukan
    new Date(year, month, date)        // 
    new Date(year, month, date, hour, minute, second, millis)          
    new Date(timestamp)   
    now
    getTime()              epoch & unix time
    Date.parse            
    getFullYear           
    getMonth              
    getDate               
    getHours              
    getSeconds            
    getMilliseconds       
    getTimezoneOffset     
    const epochTime = Date.now();        // return epochtime sekarang
    const date = new Date(epochTime);    // convert ke tanggal
    const year = date.getFullYear();     // ambil tanggal
    const month = date.getMonth() + 1;   // Ingat bulan dimulai dari 0 (Januari) - tambahkan 1
    const day = date.getDate();          // ambil hari
    const hours = date.getHours();       // jam
    const minutes = date.getMinutes();   // menit
    const seconds = date.getSeconds();   // detik
    // Konversi dari tanggal ke epoch time
    const dateString = '2023-12-31T12:00:00Z';    // Format ISO string (UTC time)
    const epochTime = Date.parse(dateString);     // Konversi string tanggal ke epoch time

 MATH
    max                   
    min                   
    round                 
    ceil
    floor                 
    average                
 BOOLEAN
    boolean.toString      
    boolean.ValueOf       
 MAP
    size                  
    clear()               
    delete(key)           
    get(key) : value      
    has(key) : boolean    
    set(key, value)       
    forEach((key, value) => ) 
 SET   
    size                  
    add(value)            
    has(value)            
    delete(value)         
    forEach(value => )
 SYMBOL
    symbol
    symbol.for
 REGEXP
    new RegExp()
    exec()
    test()
    i
    g
    m
    match(regex) : Array
    search(regex) : index
    replace(regex, value)
    replaceAll(regex, value)    
    split(regex) : Array   
 PROXY
    new Proxy             
    get                   
    set
 REFLECT
    set()
    has()
 ENCODE
    encodeURI(value)              
    encodeURIComponent(value)
    decodeURI(encoded)            
    decodeURIComponent(encoded)   
    encodeURI
    decodeURI
    encodeURIComponent
    decodeURIComponent
 Base64
    btoa(value)
    atob(encoded)
 Eval
    eval()

MAATERI SELANJUTNYA:
    JavaScript Modules
    JavaScript Document Object Model
    JavaScript Async
    JavaScript Web API

