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

/* bentuk dalam contoh (running) 
----------------------------------------------- */
import { useState } from "react";                   // 1. import
export default function Users() {
  const[toggle, setToggle] = useState(1);           // 2. state, default tab-1
  function tabToggle(urut){                         // 3. terima args
    setToggle(urut)                                 // 4. ubah state
  }
  return (
    <>
      <div>
        <button onClick={()=>tabToggle(1)}>tab - 1</button>     // 5. onClick ubah state dengan kirim param
        <button onClick={()=>tabToggle(2)}>tab - 2</button>     // 7. reaksi style dari perubahan state boleh disini lihat cth bawah 
        <button onClick={()=>tabToggle(3)}>tab - 3</button>
      </div>
      <article className={toggle==1 ? "block" : "hidden" }>Tulisan ku satu</article>    // 6. show/hide dari css di dengar dari state
      <article className={toggle==2 ? "block" : "hidden" }>Tulisan ku duaa</article>
      <article className={toggle==3 ? "block" : "hidden" }>Tulisan ku tiga</article>
    </>
  )
}

/* bentuk disederhanakan hilangkan function (running) tambah style
----------------------------------------------- */
import { useState } from "react";
export default function Users() {
  const[toggle, setToggle] = useState(1);
  return (
    <>
      <button className={toggle==1 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(1)}> tab-1 </button>       // jika hanya panggil tanpa kirim param bisa tanpa(), ()bisa infinit loop
      <button className={toggle==2 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(2)}> tab-2 </button>       // lebih aman panggil function harus dalam callback saja
      <button className={toggle==3 ? "bg-blue-200" : "bg-blue-50" } onClick={()=>setToggle(3)}> tab-3 </button>
      <article className={toggle==1 ? "block" : "hidden" }>Tulisan ku satu</article>
      <article className={toggle==2 ? "block" : "hidden" }>Tulisan ku duaa</article>
      <article className={toggle==3 ? "block" : "hidden" }>Tulisan ku tiga</article>
    </>
  )
}
