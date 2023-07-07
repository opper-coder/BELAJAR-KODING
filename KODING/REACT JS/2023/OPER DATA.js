Ringkasan
--------------------------------------------------------------------------------------------------
kirim data dari parent ke child
-------------------------------
const Parent = () => {                           // 1. komponen parent
 return
    <>
        <Child name="aqil">                      // 3. panggil komponen (oper props ke child)
    </>  
 }
 -----
const Child = (props) => {                       // 2. komponen child (tangkap data dengan props)
 return
 <>
  <div>"Halo nama saya "{props.name}</div>       // 4. gunakan props
 </>
}
kirim data dari child ke parent
-------------------------------
 const Parent = () => {                          // 1. parent 
  const operAlamat = (terimaData) => {           // 3. bikin fungsi penerima data dari child (pada args)
    return
      <>
        "alamat saya" {terimaData}               // 6. args di terima dari child bisa di gunakan di parent ini 
      </>
    }
  return
  <>
        <Child name="aqil" alamat={operAlamat}>  // 4. kirim props dari parent ke child berupa fungsi tanpa invoke()
  </>  
 }
 -----
const Child = (props) => {                       // 2. child
 return
 <>
  <div>Halo nama saya {props.name} dan {props.operAlamat("saiti")}</div>  // 5. ambil props dari parent berupa function(sambil kirim arg), 
 </>                                                                            
}
ubah state tunggal
-------------------------------
import { useState } from "react";
export default function App() {
  const [isNotif, setIsNotif] = useState(false);      // 1. jika kita punya state
  const notif = () => {
    setIsNotif(!isNotif);                             // 2. kita bisa ubah dengan fungsi pengubah
  };
  return <div onClick={notif}>gunakan datanya disini!{isNotif}</div>;
}
ubah state berkali2
-------------------------------
import { useState } from "react"; 
export default function App() {
  const [isNotif2, setIsNotif2] = useState(false);   // 1. state nilaiawal: false    
  const notif2 = () => { 
    setIsNotif2(!isNotif2);                          // 2. ubah state pertama langsung ke state: true
    setTimeout(() => {                            
      setIsNotif2(state => !isNotif2);               // 3. ubah state kedua dalam args callback 
    }, 2000);                                            hasilnya bisa: false kalau tidak dalam callback hasilnya tetap true
  };
  return <div onClick={notif2}>gunakan datanya disini!{isNotif2}</div>;
}

 
--------------------------------------------------------------------------------------------------

sumber youtube: 
1. Semmi Verian > [NGE-React] #17 Mengirimkan data dari child ke parent component
2. dea afrizal > Code Yang Harus React JS Developer Ketahui

- kirim data parent ke child                     -> dengan props data biasa
- kirim data dari child ke parent                -> dengan props function argument
- ubah state tunggal                             -> langsung ubah
- ubah state berkali2                            -> harus pakai callback

kirimdata dari parent ke child
------------------------------------------
 const Parent = () => {                          // 1. komponen parent nya
 return
    <>
        <Child name="aqil">                      // 3. panggil komponen dengan oper data ke child
    </>  
 }
 -----
const Child = (props) => {                       // 2. komponen child tangkap data dengan props
 return
 <>
  <div>"Halo nama saya "{props.name}</div>       // 4. gunakan props
 </>
}

kirim data dari Child ke Parent
------------------------------------------
 const Parent = () => {                          // 1. parent 
  const operAlamat = (terimaData) => {           // 3. bikin fungsi penerima data dari child (pada args)
    return
      <>
        "alamat saya" {terimaData}               // 6. args di terima dari child bisa di gunakan di parent ini 
      </>
    }
  return
  <>
        <Child name="aqil" alamat={operAlamat}>  // 4. kirim props dari parent ke child berupa fungsi tanpa invoke()
  </>  
 }
 -----
const Child = (props) => {                       // 2. child
 return
 <>
  <div>Halo nama saya {props.name} dan {props.operAlamat("saiti")}</div>  // 5. ambil props dari parent berupa function, 
 </>                                                                            karena berupa function maka kita bisa invoke sekaligus kirim argumen
}

Ubah data di state 
kasus1 
------------------------------------------
Ubah data di state hanya berlaku sekali, jika lebih sekali 
sebaiknya pakai callback agar efektif

import { useState } from "react";

export default function App() {
  const [isNotif, setIsNotif] = useState(false);      // 1. jika kita punya state
  const notif = () => {
    setIsNotif(!isNotif);                             // 2. kita bisa ubah dengan fungsi pengubah
  };
  return <>gunakan datanya disini!</>;
}
kasus2
-------------------------------------------
import { useState } from "react";

export default function App() {
  const [isNotif, setIsNotif] = useState(false);    // 1. kita punya state tapi kita akan ubah lebih sekali
  const notif2 = () => { 
    setIsNotif(!isNotif);                           // 2. kita ubah pertama , masih bisa jalan 
    setTimeout(() => {
      setIsNotif(!isNotif);                         // 3. kita ubah untuk kedua kali sudah tidak running alias state di anggap belum berubah masih di state awal
    }, 2000);                                             padahal sudah di ubah ppertama, ubahan kedua menganggap ubahan pertama tidak terjadi
    ---
    setTimeout(() => {                              // hal itu terjadi karena ubahan kedua mengambial dari state awal bukan dari state terakhir
      setIsNotif((state) => !isNotif;    // supaya dapat mengambil dari state terbaru, ubah state dalam params callbac
    }, 2000);
  };

  return <>gunakan datanya disini!</>;
}
--- keterangan lain
import { useState } from "react";

export default function App() {
  const [isNotif, setIsNotif] = useState(false);
  // ubahstate tunggal valid
  const notif = () => {
    setIsNotif(!isNotif);                   // ubah tunggal valid (tidak dalam callback)
  };
  // ubahstate pertama valid, kedua tidak valid
  const notif2 = () => {
    setIsNotif(!isNotif);                  // ubah pertama valid
    setTimeout(() => {
      setIsNotif(!isNotif);                // ubah kedua tidak valid (tidak dalam callback)
    }, 2000);
  };
  // ubahstate pertama valid, kedua valid (dalam callback)
  const notif3 = () => {
    setIsNotif(!isNotif);                 // ubah pertama valid
    setTimeout(() => {
      setIsNotif((state) => !isNotif);    // ubah kedua valid (dalam callback)
    }, 2000);
  };

  return <>gunakan datanya dengan even onclick disini!</>;
}


kasus2 yg benar
-----------------------------------------
import { useState } from "react"; 
export default function App() {
  const [isNotif, setIsNotif] = useState(false);   // 1. state awal: false    
  const notif2 = () => { 
    setIsNotif(!isNotif);                          // 2. ubah state pertama langsung state: true
    setTimeout(() => {                            
      setIsNotif(state => !isNotif);               // 3. ubah state kedua dalam args callback 
    }, 2000);                                            hasilnya bisa: false kalau tidak dalam callback hasilnya tetap true
  };
  return <>gunakan datanya disini!</>;
}





