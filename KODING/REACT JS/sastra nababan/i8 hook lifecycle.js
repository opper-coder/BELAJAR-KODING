import React, { Component, useState, useEffect } from 'react';
import './App.css';
// ==================================




const Coba = () => {
  console.log("-> function init ");
  const [count, setCount] = useState(0)
  const HandleCount = () => 
    setCount(prefState => {
      return prefState + 1
    });

    // useEffect(() => {
    //   console.log("-> my first effect")
    // }, )

    useEffect(() => {
      console.log("-> my didmount")
    }, [])

    useEffect(() => {
      if(count >0){                       // fungsi handle agar update tidak terpanggil 2 kali
      console.log("-> my didupdate")
      }
    }, [count])
    useEffect(() => {
      return () => {
      console.log("-> my didunmount")
      }
    }, [])

    console.log('-> start render {${count}}');
    return(
      <div>
        <h3> Function Componen </h3>
        <p>

          <button onClick={HandleCount}> Count </button><span> </span>
          { count }
        </p>
      </div>
    )
}





// ==================================
function App() {      
  
  const [toggle,setToggle] = useState(true); 
  const handleToggle = () => setToggle(currentState => !currentState) 

  return (
    <div className="App">
      <header className="App-header">
        
          <button onClick={handleToggle}> toggle </button>
          {toggle && <coba/>}



<Coba/>

      

      </header>
    </div>
  );
}

export default App;










// ************************* atau LEBIH MUDAH DI PAHAMI INI **************************
 
import React, { useState, useEffect } from 'react';
import './App.css';
// ==================================

const Coba = () => {
  console.log("pertama, init dulu !")
  const [count, setCount] = useState(0)

  // useEffect (()=>{console.log("ketiga, efect pertama")})
  useEffect (()=>{console.log("keempat, efect didmount")},[])
  useEffect (()=>{if(count > 0)console.log("kelima, efect didupdate")},[count])
  useEffect (()=>{return(()=>{console.log("keenam, efect unmount")})},[])

  console.log("kedua, tahap render")
  return(
    <div>
      <p>componen lifecycle</p>
      <p>{count}</p>
      <p><button onClick={()=> setCount(count + 1) }>Tambah!</button></p>
      <p><button onClick={()=>{ setCount(count - count) }}>reset!</button></p>
    </div>
  )
}

// ==================================
function App() {      
const [toggle, setToggle] = useState(true) 

  return (
    <div className="App">
      <header className="App-header">
      
<button onClick = {() => { setToggle(toggle => !toggle)  }}>toggle</button>
{toggle && <Coba/>}

      </header>
    </div>
  );
}

export default App;

// ****************************************************************************