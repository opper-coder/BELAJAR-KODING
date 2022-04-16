// ada sebuah komponen di halaman "ada.js"
import React from 'react';
const Coba = () => {return( <><h2>haloo</h2></> )}
/* cara export komponen *di bagian paling bawah halaman*/
export default Coba;
/* cara include di halaman sejajar */
import Coba from 'ada.js';
/* cara include di halaman di halaman masuk satu folder*/
import Coba from './folder/ada.js';
/* cara include di halaman di halaman masuk dua folder*/
import Coba from './folder1/folder2/ada.js';