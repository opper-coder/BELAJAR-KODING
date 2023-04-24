bikin tab pada react
-----------------------------------------------
STATE: 
  const [toggle, setToggle] = useState(1);
HTML:
  - class= "tab-active"               // bikin 3 tombol tab kondisi awal class ="tab"
  - class= "content-show"             // bikin 3 content display kondisi awal class = "content"  
CSS: 
  - .tab{display: none}               // kondisi awal
  - .tab-active{display: block}       // style pada tombol aktif nya > sebelumnya juga kasih CSS kondisi awal 
  - .content{display: none}           // kondisi awal
  - .conten-show{display: block}      // style pada contain: kondisi default, kondisi aktif
FUNCTION:
  function toggleTab(id){setToggle(id)}             // pengubah state dengan menerima param
TOMBOL:
  onclick={()=>toggleTab(2)}          // trigger dengan mengirim parameter state
REACTION:
  class={ toggle == 1 ? content-active : content }  // pada class ada ternary css

-----------------------------------------------
import { useState } from "react"

export default function Tab() {
const[toggle, setToggle] = useState(1);

function toggleTab(id){
  setToggle(id)
}
  return (
    <>
      <ul>
        <li onClick={()=>toggleTab(1)} classNamae={ toggle == 1 ? tab-active : tab } >tab-1</li>
        <li onClick={()=>toggleTab(2)}>tab-2</li>
        <li onClick={()=>toggleTab(3)}>tab-3</li>
      </ul>
      <section className={ toggle == 1 ? content-show : content }>Lorem satu</section>
      <section className={ toggle == 1 ? content-show : content }>Lorem dua</section>
      <section className={ toggle == 1 ? content-show : content }>Lorem tiga</section>
    </>
  )
}
