/*
- nama komponen huruf awal kapital
- selain itu jsx tidak case sensitif
- pada function dan class membutuhkan return()
- khusus pada class memnutuhkan render(){}
- pada value membutuhkan {} cth: {props.nama}, 
- pada halaman lain butuh export import
- hal yang harus import adalah react from react
*/

// ------------ FUNGSIONAL KOMPONEN BASIC/STATELESS KOMPONEN
function Greeting (){
  return (<h1> halo world </h1>);
}
<Greeting />
// ------------ PROPS
function Greeting (props){
  return (<h1> halo world, {props.nama} !</h1>);
}
<Greeting nama="Sylmi"/>
// ------------ ARROW FUNCTIONS
const Greeting2 = (props) => {
  return (<h1> halo world, {props.nama} !</h1>);
}
<Greeting2 nama="izza"/>
// ------------ STATEFULL COMPONEN
class Coba extends Component {
  render(){
    return(
      <div></div>
    )
  }
}
class Greeting3 extends Component{
  render(){
    return ( <h1> halo world! </h1> )
  }
}
// atau
class Greeting4 extends React.Component{
      render(){
        return ( <h1> halo world!</h1> )
      }
    }
// panggil
      <Greeting3 />
      <Greeting4 />
      
// syarat di halaman ini harus di import componen dari react
import React, { Component } from 'react';

// jika mau di gunakan oleh halaman lain maka lakukan export default
export default Greeting4;

// syarat 2 harus ada render sebab ini object/class

// ---------------- TEMPLATE HALAMAN STATE LESS
import React from 'react';

const CobaKomponenStateLess = () => {
    return(
        <p> hallo komponen state less </p>
    );
  }

export default CobaKomponenStateLess;
// =====

// ---------------- TEMPLATE HALAMAN STATE FULL
import React from 'react';

class CobaKomponenStateFull extends React.Component{
    render(){
        return(
            <p> hallo komponen state full </p>
        );
    }
  }

export default CobaKomponenStateFull;
// =====
// -------------- TEMPLATE PEMANGGILAN DI HALAMAN LAIN (App.js)
import CobaKomponenStateLess from './komponen/stateless';
import CobaKomponenStateFull from './kontainer/statefull.jsx'; // pakai extention atau tidak no problem