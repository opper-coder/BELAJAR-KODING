sumber youtube: 
1. Semmi Verian > [NGE-React] #17 Mengirimkan data dari child ke parent component
2. dea afrizal > Code Yang Harus React JS Developer Ketahui

- kirim data parent ke child dengan props
- kirim data dari child ke parent dengan props function argument
- ubah data dengan langsung atau dengan callback

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
  const operAlamat = (terimaData) => {           // 4. sebelumnya sudah kita persiapkan ada function penerima data
    return
      <>
        "alamat saya" {terimaData}               // 5. data yang di terima dari child bisa di gunakan di parent ini 
      </>
    }
  return
  <>
        <Child name="aqil" alamat={operdata()}>  // 6. function di invoke dan data oper sudah bisa di tampilkan
  </>  
 }
 -----
const Child = (props) => {                       // 2. child
 return
 <>
  <div>Halo nama saya {props.name} dan {props.operAlamat("saiti")}</div>  // 3. kirim data dari child: dg cara menerima props berisi function
 </>                                                                      //    karena function kita bisa kirim via argument "saiti"
}

Ubah data di state 
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

import { useState } from "react";

export default function App() {
  const [isNotif, setIsNotif] = useState(false);

  const notif = () => {
    setIsNotif(!isNotif);
  };

  const notif2 = () => {
    setIsNotif(!isNotif);

    setTimeout(() => {
      setIsNotif(!isNotif);
    }, 2000);
    
    setTimeout(() => {
      setIsNotif((state) => {
        !isNotif;
      });
    }, 2000);
  };

  return <>gunakan datanya disini!</>;
}










