/* 
bikin tab pada react
-----------------------------------------------
STATE: 
  const [toggle, setToggle] = useState(1);
HTML:
  - bikin 3 tombol tab
  - bikin 3 content display
CSS: 
  - .hidden{display:none}                           // bikin class sembunyi
  - .block{display:block}                           // bikin class penampil
FUNCTION:
  function toggleTab(id){setToggle(id)}             // pengubah state dengan menerima param sebut saja id
TOMBOL:
  onclick={()=>toggleTab(1)}                        // trigger dengan mengirim parameter state
REACTION:
  class={ toggle == 1 ? content-active : content }  // pada class ada ternary css
  contoh di bawah sudah running dengan class block hidden disediakan oleh framework PrimeReact > tinggal copas
*/ 

/* -----------------------------------------------
bentuk dalam contoh (running) */
import { useState } from "react";

export default function Users() {
  const[toggle, setToggle] = useState(1);
  function tabToggle(urut){
    setToggle(urut)
  }
  return (
    <>
      <div>
        <button onClick={()=>tabToggle(1)}>tab - 1</button>
        <button onClick={()=>tabToggle(2)}>tab - 2</button>
        <button onClick={()=>tabToggle(3)}>tab - 3</button>
      </div>
      <article className={toggle==1 ? "block" : "hidden" }>Tulisan ku satu</article>
      <article className={toggle==2 ? "block" : "hidden" }>Tulisan ku duaa</article>
      <article className={toggle==3 ? "block" : "hidden" }>Tulisan ku tiga</article>
    </>
  )
}

/* -----------------------------------------------
bentuk disederhanakan hilangkan function (running) tambah style */

import { useState } from "react";
export default function Users() {
  const[toggle, setToggle] = useState(1);
  return (
    <>
      <button className={toggle==1 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(1)}>tab - 1</button>       // jika hanya panggil tanpa kirim param bisa tanpa(), ()bisa infinit loop
      <button className={toggle==1 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(2)}>tab - 2</button>       // lebih aman panggil function harus dalam callback saja
      <button className={toggle==1 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(3)}>tab - 3</button>
      <article className={toggle==1 ? "block" : "hidden" }>Tulisan ku satu</article>
      <article className={toggle==2 ? "block" : "hidden" }>Tulisan ku duaa</article>
      <article className={toggle==3 ? "block" : "hidden" }>Tulisan ku tiga</article>
    </>
  )
}
