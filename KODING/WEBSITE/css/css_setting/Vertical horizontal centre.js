CENTER VERTICAL HORIZONTAL
-----------------------------------------------------------------------------------------------------
VERTIKAL (berdiri)
- FLEX
  .box { align-items: flex-center }
- GRID
  .box { align-items: center }
- BLOCK
  <!-- .box {} -->
  <!-- .isi {} -->
- INLINE-BLOCK
  <!-- .box {} -->
  <!-- .isi {} -->
- TABLE
  <!-- .box { display: table-cell } -->
  <!-- .isi { vertical-align: middle } -->
-----------------------------------------------------------------------------------------------------
HORIZONTAL (mendatar)
- FLEX
  .box { display: flex; justify-content: center; }
- GRID
  .box { display: grid; justify-items: center; }
- BLOCK
  <!-- .box { block } -->
  <!-- .isi {  } -->
- INLINE-BLOCK
  <!-- .box { inline-block } -->
  <!-- .isi {  } -->
- TABLE
  <!-- .box { display: table } -->
  <!-- .isi {  } -->
-----------------------------------------------------------------------------------------------------
XY Alignmen
- FLEX
  .box { display: flex }
  .isi { margin: auto }
- GRID
  .box { display: grid }
  .isi { margin: auto }
  atau
  .isi { place-items: center }
  atau
  .isi { align-self: center }
- BLOCK
  .box { display: block }
  .isi {  }
- INLINE-BLOCK
  .box { display: inline-block }
  .isi {  }
- TABLE
  .box { display: table }
  .isi {  }
-----------------------------------------------------------------------------------------------------
TIPS
- untuk bisa membuat tinggi komponen menjadi 100% maka buat 100% dulu pada html, body{ height:100%; }
- 
_____________________________________________________________________________________________________
