CENTER VERTICAL HORIZONTAL
---------------------------------------------------------
VERTIKAL (berdiri)
---------------------------------------------------------
FLEX
  .container{ align-items: flex-center }      // atau
  .container{ place-items: center }           // center, start, end
GRID
  .container{ align-items: center }           // center, start, end // atau
  .isi{ align-self: center }
BLOCK
  .container{ padding: 50px 0 }               // mainkan padding vertical // atau
  .container {                                // mainkan lineheight wadah dan isi
    line-height: 500px;
    height: 500px;
    background: teal;
  }
  .isi {
    line-height: 1.5;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
  }
INLINE-BLOCK
  .container{ padding: 50px 0 }               // mainkan padding vertical 
TABLE
  td{ vertical-align: bottom; }               // atau
  .container{ display: table } 
  .isi { 
    display: table-cell;
    vertical-align: middle; }                 // middle,top,bottom
---------------------------------------------------------
HORIZONTAL (mendatar)
---------------------------------------------------------
FLEX
  .container{ justify-content: center; }      // flex-end, flex-start, arround, space-between
GRID
  .container{ justify-items: center; }
  .isi{ justify-self: center; }
BLOCK
  .container{ text-align: center }            // atau
  .isi { margin:0 auto; } / margin: auto
INLINE-BLOCK
  .container{ text-align: center }            // atau
  .isi { margin:0 auto; } / margin: auto
TABLE
  td{ text-align: center; }
UMUM
.container{ display: relatif }
.isi{   
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%); 
  }
----------------------------------------------------------
XY Alignmen (tegak lurus)
----------------------------------------------------------
FLEX
  .isi{ margin: auto  }
GRID
  .container{ place-items: center }   // atau
  .isi{ margin: auto }                // atau
  .isi { align-self: center }         // atau
BLOCK
  .isi{
    posision: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%;);
  }
INLINE-BLOCK
-
TABLE
-
---------------------------------------------------------
TIPS
---------------------------------------------------------
- untuk bisa membuat tinggi komponen menjadi 100% maka 
buat 100% dulu pada html, body{ height:100%; }
- { height : 100vh; }
________________________________________________________
